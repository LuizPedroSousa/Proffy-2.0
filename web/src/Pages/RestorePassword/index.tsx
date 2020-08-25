import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../Assets/Icons/backPurple.svg';
import Form from './../../Components/Login/Form/index';
import InputForm from '../../Components/Elements/InputForm';
import Proffy from '../../Components/Login/Proffy';

import './style.css'

function RestorePassword() {
    return (
        <div className="restore-password-container">
            <div className="restore-password-content">
                <header>
                    <Link to="/login">
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                </header>
                <section>
                    <Form
                        title="Eita, esqueceu sua senha?"
                        description="Não esquenta, vamos dar um jeito nisso."
                        buttonName="Enviar"
                    >
                        <InputForm
                            label="email"
                            type="email"
                            name="email"
                        />
                    </Form>
                </section>
            </div>
            <Proffy />
        </div>
    );
}

export default RestorePassword;