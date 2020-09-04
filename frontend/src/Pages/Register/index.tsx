import React, { useState, FormEvent } from 'react';


import Form from './../../Components/Login/Form/index';
import Proffy from './../../Components/Login/Proffy/index';
import InputForm from './../../Components/Elements/InputForm/index';

import { useHistory } from 'react-router-dom';

import backIcon from '../../Assets/Icons/backPurple.svg';
import { Link } from 'react-router-dom';
import { RegisterContainer, Header } from './styled';
import api from './../../Services/api';

function Register() {
    const [viewPassword, setViewPassword] = useState(false);
    function toggleViewPassword() {
        if (!viewPassword) {
            return setViewPassword(true);
        } else {
            return setViewPassword(false);
        }
    }

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const createUser = (e: FormEvent) => {
        e.preventDefault();
        api.post('/users/register', {
            name,
            surname,
            email,
            password,
        })
            .then(() => {
                window.alert('Usuário registrado com sucesso')
                history.push('/login')
            })
            .catch(err => {
                window.alert(`Falha ao registrar usuário: ${err}`);
                history.push('/register')
            });
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
                        onSubmit={createUser}
                    >
                        <InputForm
                            label="Nome"
                            name="name"
                            type="text"
                            styles={
                                name != ""
                                    ?
                                    {
                                        top: "1.2rem",
                                        fontSize: "1.2rem"
            
                                    }
                                    :
                                    {
                                        top: "2rem",
                                    }
                            }
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <InputForm
                            label="Sobrenome"
                            name="surname"
                            type="text"
                            value={surname}
                            styles={
                                surname != ""
                                    ?
                                    {
                                        top: "1.2rem",
                                        fontSize: "1.2rem"
            
                                    }
                                    :
                                    {
                                        top: "2rem",
                                    }
                            }
                            onChange={e => setSurname(e.target.value)}
                        />
                        <InputForm
                            label="Email"
                            name="email"
                            type="email"
                            value={email}
                            styles={
                                email != ""
                                    ?
                                    {
                                        top: "1.2rem",
                                        fontSize: "1.2rem"
            
                                    }
                                    :
                                    {
                                        top: "2rem",
                                    }
                            }
                            onChange={e => setEmail(e.target.value)}
                        />
                        <InputForm
                            label="Senha"
                            name="password"
                            type={!viewPassword ? "password" : "text"}
                            value={password}
                            styles={
                                password != ""
                                    ?
                                    {
                                        top: "1.2rem",
                                        fontSize: "1.2rem"
            
                                    }
                                    :
                                    {
                                        top: "2rem",
                                    }
                            }
                            onChange={e => setPassword(e.target.value)}
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