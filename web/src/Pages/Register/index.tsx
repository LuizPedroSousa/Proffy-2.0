import React, { useState } from 'react';


import Form from './../../Components/Login/Form/index';
import Proffy from './../../Components/Login/Proffy/index';
import InputForm from './../../Components/Elements/InputForm/index';

import backIcon from '../../Assets/Icons/backPurple.svg';
import { Link } from 'react-router-dom';
import { RegisterContainer, Header } from './styled';

function Register() {
    const [viewPassword, setViewPassword] = useState(false);
    function toggleViewPassword() {
        if (!viewPassword) {
            return setViewPassword(true);
        } else {
            return setViewPassword(false);
        }
    }
    return (
        <RegisterContainer>
            <div>
                <Header>
                    <Link to="/login">
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                </Header>
                <section>
                    <Form
                        title="Cadastro"
                        description="Preencha os dados abaixo para começar."
                        buttonName="Concluir Cadastro"
                    >
                        <InputForm
                            label="Nome"
                            name="name"
                            type="text"
                        />
                        <InputForm
                            label="Sobrenome"
                            name="surname"
                            type="text"
                        />
                        <InputForm
                            label="Email"
                            name="email"
                            type="email"
                        />
                        <InputForm
                            label="Senha"
                            name="password"
                            type={!viewPassword ? "password" : "text"}
                        >
                            {
                                !viewPassword ?
                                    <span
                                        onClick={toggleViewPassword}
                                        style={{ color: "var(--color-text-complement" }}>
                                        <i className="far fa-eye"></i>
                                    </span>
                                    :
                                    <span
                                        onClick={toggleViewPassword}
                                        style={{ color: "var(--color-primary" }}>
                                        <i className="far fa-eye-slash"></i>
                                    </span>
                            }
                        </InputForm>
                    </Form>
                </section>
            </div>
            <Proffy />
        </RegisterContainer>
    );
}

export default Register;