import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../Assets/Icons/backPurple.svg';
import Form from './../../Components/Login/Form/index';
import InputForm from '../../Components/Elements/InputForm';
import Proffy from '../../Components/Login/Proffy';

import {
    RestorePasswordContainer,
    Header,
    RestorePasswordContent,
} from './styled'

function RestorePassword() {
    return (
        <RestorePasswordContainer>
            <RestorePasswordContent>
                <Header>
                    <Link to="/login">
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                </Header>
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
            </RestorePasswordContent>
            <Proffy />
        </RestorePasswordContainer>
    );
}

export default RestorePassword;