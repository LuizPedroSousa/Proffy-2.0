import React from 'react';
import {PageHeaderContainer} from './styled';

import backgroundImage from '../../../Assets/Images/background.svg';
import logoImage from '../../../Assets/Images/logo.svg';
function Proffy() {
    return (
        <PageHeaderContainer style={{backgroundImage: `url(${backgroundImage})`}}>
            <div>
                <img
                    src={logoImage}
                    alt="Proffy"
                />
                <h2>Sua plataforma de estudos online.</h2>
            </div>
        </PageHeaderContainer>
    );
}

export default Proffy;