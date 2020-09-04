import React, { useState, FormEvent } from 'react';

import Proffy from './../../Components/Login/Proffy/index';
import Form from './../../Components/Login/Form/index';
import InputForm from './../../Components/Elements/InputForm/index';
import { Link, useHistory } from 'react-router-dom';

import api from './../../Services/api';
import {
    LoginContainer,
    OptionsLogin,
    Footer,
    ViewPasswordPrimary,
    ViewPasswordSecondary,
    Checkbox
} from './styled';

function Login() {
    const [checkbox, setCheckbox] = useState(false);
    const [viewPassword, setViewPasssword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    function toggleCheckboxRemember() {
        if (!checkbox) {
            return setCheckbox(true);
        } else {
            return setCheckbox(false);
        }
    }

    function toggleViewPassword() {
        if (!viewPassword) {
            return setViewPasssword(true);
        } else {
            return setViewPasssword(false);
        }
    }

    const login = (e: FormEvent) => {
        e.preventDefault();
        api.post('/users/auth', {
            email,
            password,
        })
        .then(() => {
            history.push('/');
        })
        .catch(err => {
            window.alert('senha ou email invalidos');
            history.push('/login')
        });
    }
    return (
        <LoginContainer>
            <Proffy />
            <section>
                <Form
                    title="Fazer Login"
                    buttonName="Entrar"
                    onSubmit={login}
                >
                    <InputForm
                        label="Email"
                        name="email"
                        type="Email"
                        onChange={e => setEmail(e.target.value)}
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
                    />
                    <InputForm
                        label="Senha"
                        name="password"
                        type={!viewPassword ? "password" : "text"}
                        onChange={e => setPassword(e.target.value)}
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
                    >
                        {!viewPassword ?
                            <ViewPasswordPrimary onClick={toggleViewPassword}>
                                <i className="far fa-eye"></i>
                            </ViewPasswordPrimary>

                            :

                            <ViewPasswordSecondary onClick={toggleViewPassword}>
                                <i className="far fa-eye-slash"></i>
                            </ViewPasswordSecondary>

                        }
                    </InputForm>

                    <OptionsLogin>
                        {
                            !checkbox ?
                                <Checkbox
                                    onClick={toggleCheckboxRemember}
                                >
                                    <i className="fas fa-check"></i>
                                </Checkbox>
                                :
                                <span onClick={toggleCheckboxRemember}></span>
                        }
                        <label onClick={toggleCheckboxRemember}>Lembrar-me</label>
                        <Link to="restore-password">Esqueci minha senha</Link>
                    </OptionsLogin>
                </Form >
                <Footer>
                    <div>
                        <p>Não tem conta?</p>
                        <Link to="/register">Cadastre-se</Link>
                    </div>
                    <p>É de graça <span><i className="fas fa-heart"></i></span></p>
                </Footer>
            </section >
        </LoginContainer >
    );
}

export default Login;