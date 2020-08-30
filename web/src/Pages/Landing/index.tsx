import React from 'react';


import logoImage from '../../Assets/Images/logo.svg';

import hero from '../../Assets/Images/hero.svg';

import studyImage from '../../Assets/Icons/study.svg';

import giveClassesImage from '../../Assets/Icons/give-classes.svg';

import { 
    Container, 
    PageLandingContent, 
    HeaderContainer,
    LogoContainer,
    Footer
} from './styled';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <Container>
            <PageLandingContent>
                <HeaderContainer>

                    <Link to="perfil">
                        <img
                            src="https://pbs.twimg.com/profile_images/1142473888733061122/PkczdiXG_400x400.jpg"
                            alt=""
                        />
                        <p>Luiz Pedro</p>
                    </Link>
                    <a
                        href="#"
                        className="buttonPower"
                    >
                        <span><i className="fas fa-power-off"></i></span>
                    </a>
                </HeaderContainer>

                <LogoContainer>

                    <div>
                        <img src={logoImage} alt="Proffy" />
                        <h2>Sua plataforma de estudos online</h2>
                    </div>
                    <img src={hero} alt="hero" />

                </LogoContainer>

            </PageLandingContent>

            <Footer>

                <div>
                    <h2>Seja bem-vindo !</h2>
                    <strong>O que você deseja fazer ?</strong>
                </div>

                <div>

                    <Link to="/study">
                        <img src={studyImage} alt="Estudar" />
                        <p>Estudar</p>
                    </Link>
                    <Link to="give-classes">
                        <img
                            src={giveClassesImage}
                            alt="Dar Aulas"
                        />
                        <p>Dar Aulas</p>
                    </Link>

                </div>

                <div>
                    <p>
                        Total de 285 conexôes
                        
                    </p>
                    <span> já realizadas <i className="fas fa-heart"></i></span>
                </div>
            </Footer>
        </Container>
    );
}

export default Landing;