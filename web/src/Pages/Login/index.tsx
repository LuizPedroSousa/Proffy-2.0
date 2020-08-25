import React, { useState } from 'react';

import './style.css'
import Proffy from './../../Components/Login/Proffy/index';
import Form from './../../Components/Login/Form/index';
import InputForm from './../../Components/Elements/InputForm/index';
import { Link } from 'react-router-dom';



function Login() {
    const [checkbox, setCheckbox] = useState(false);
    const [viewPassword, setViewPasssword] = useState(false);
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
    return (
        <div className="login-container">
            <Proffy />
            <section>
                <Form
                    title="Fazer Login"
                    buttonName="Entrar"
                >
                    <InputForm
                        label="Email"
                        name="email"
                        type="Email"
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

                    <div className="options-login">
                        {
                            checkbox ?
                                <span
                                    onClick={toggleCheckboxRemember}
                                    style={{ backgroundColor: 'var(--color-secondary)' }}
                                >
                                    <i className="fas fa-check"></i>
                                </span>
                                :
                                <span onClick={toggleCheckboxRemember}></span>
                        }
                        <label onClick={toggleCheckboxRemember}>Lembrar-me</label>
                        <Link to="restore password">Esqueci minha senha</Link>
                    </div>
                </Form>
                <footer>
                    <div className="accont">
                        <p>Não tem conta?</p>
                        <Link to="/register">Cadastre-se</Link>
                    </div>
                    <p>É de graça <span><i className="fas fa-heart"></i></span></p>
                </footer>
            </section>
        </div>
    );
}

export default Login;