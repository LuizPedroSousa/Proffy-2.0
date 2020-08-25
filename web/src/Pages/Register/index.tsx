import React, { useState } from 'react';


import './style.css'
import Form from './../../Components/Login/Form/index';
import Proffy from './../../Components/Login/Proffy/index';
import InputForm from './../../Components/Elements/InputForm/index';

import backIcon from '../../Assets/Icons/backPurple.svg';
import { Link } from 'react-router-dom';

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
        <div className="register-container">
            <div className="register-content">
                <header>
                    <Link to="/login">
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                </header>
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
        </div>
    );
}

export default Register;