import React from 'react';
import './style.css';

import backgroundImage from '../../../Assets/Images/background.svg';
import logoImage from '../../../Assets/Images/logo.svg';
function Proffy() {
    return (
        <div className="login-proffy-container">
            <img
                src={backgroundImage}
                alt="background"
            />
            <div className="login-proffy-content">
                <img
                    src={logoImage}
                    alt="Proffy"
                />
                <p>Sua plataforma de estudos online.</p>
            </div>
        </div>
    );
}

export default Proffy;