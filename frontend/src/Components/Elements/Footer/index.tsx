import React from 'react';

import importantIcon from '../../../Assets/Icons/important.svg';

import { FooterContainer } from './styled';
interface FooterProps {
    buttonName: string;
}

const Footer: React.FunctionComponent<FooterProps> = ({ buttonName }) => {
    return (
        <FooterContainer>
            <div>
                <img
                    src={importantIcon}
                    alt="Aviso"
                />
                <p>
                    Importante!
                    <p>Preencha todos os dados corretamente.</p>
                </p>
            </div>
            <button type="submit">
                {buttonName}
            </button>
        </FooterContainer>
    );
}

export default Footer;