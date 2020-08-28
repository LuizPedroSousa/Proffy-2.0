import React from 'react';
import {Container} from './styled';

import backgroundImage from '../../../Assets/Images/background.svg';
import logoImage from '../../../Assets/Images/logo.svg';
function Proffy() {
    return (
        <Container style={{backgroundImage: `url(${backgroundImage})`}}>
            <div>
                <img
                    src={logoImage}
                    alt="Proffy"
                />
                <h2>Sua plataforma de estudos online.</h2>
            </div>
        </Container>
    );
}

export default Proffy;