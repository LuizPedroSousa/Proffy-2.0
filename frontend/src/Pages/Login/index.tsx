import React, { useState } from 'react';

import Proffy from './../../Components/Login/Proffy/index';
import Form from './../../Components/Login/Form/index';
import InputForm from './../../Components/Elements/InputForm/index';
import { Link } from 'react-router-dom';

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
        <LoginContainer>
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