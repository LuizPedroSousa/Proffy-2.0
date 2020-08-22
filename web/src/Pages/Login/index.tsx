import React, { useState } from 'react';

import './style.css'
import Proffy from './../../Components/Login/Proffy/index';
import Form from './../../Components/Login/Form/index';
import InputForm from './../../Components/Elements/InputForm/index';



function Login() {
    const [checkbox, setCheckbox] = useState(false);
    function toggleCheckboxRemember() {
        if (!checkbox) {
            return setCheckbox(true);
        } else {
            return setCheckbox(false);
        }
    }
    return (
        <div className="login-container">
            <Proffy />
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
                    type="password"
                />
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
                    <a href="#">Esqueci minha senha</a>
                </div>
            </Form>
            <footer>
                <div className="accont">
                    <p>Não tem conta?</p>
                    <a href="#">Cadastre-se</a>
                </div>
                <p>é de graça <span><i className="fas fa-heart"></i></span></p>
            </footer>
        </div>
    );
}

export default Login;