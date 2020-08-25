import React from 'react';
import './style.css';

import backgroundImage from '../../../Assets/Images/background.svg';
import logoImage from '../../../Assets/Images/logo.svg';
function Proffy() {
    return (
        <div className="login-proffy-container" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div>
                <img
                    src={logoImage}
                    alt="Proffy"
                />
                <h2>Sua plataforma de estudos online.</h2>
            </div>
        </div>
    );
}

export default Proffy;