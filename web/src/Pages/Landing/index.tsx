import React from 'react';


import logoImage from '../../Assets/Images/logo.svg';

import hero from '../../Assets/Images/hero.svg';

import studyImage from '../../Assets/Icons/study.svg';

import giveClassesImage from '../../Assets/Icons/give-classes.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing" className="page-landing" >
            <div id="page-landing-content">
                <header id="header-container" className="container">
                    <a href="">
                        <img
                            src="https://pbs.twimg.com/profile_images/1142473888733061122/PkczdiXG_400x400.jpg"
                            alt=""
                        />
                        <p>Luiz Pedro</p>
                    </a>
                    <a href="#" className="buttonPower"><span><i className="fas fa-power-off"></i></span></a>
                </header>
                <div className="logo-container">
                    <div className="logo-content">
                        <img src={logoImage} alt="logo" />
                        <h2>Sua plataforma de estudos online</h2>
                    </div>
                    <img className="hero-image" src={hero} alt="hero" />
                </div>
            </div>

            <section className="semi-footer">
                <div className="text-content">
                    <h2>Seja bem-vindo !</h2>
                    <strong>O que você deseja fazer ?</strong>
                </div>
                <div className="buttons-container">
                    <a href="#" className="study">
                        <img src={studyImage} alt="Estudar" />
                        <p>Estudar</p>
                    </a>
                    <a href="#" className="give-classes">
                        <img
                            src={giveClassesImage}
                            alt="Dar Aulas"
                        />
                        <p>Dar Aulas</p>
                    </a>
                </div>
                <div className="connections">
                    <p>
                        Total de 285 conexôes
                    </p>
                    <span> já realizadas <i className="far fa-heart"></i></span>
                </div>
            </section>
        </div>
    );
}

export default Landing;