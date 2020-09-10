import React, {useState, useContext, useEffect} from 'react';
import {shade, lighten} from 'polished';

import logoImage from '../../Assets/Images/logo.svg';
import hero from '../../Assets/Images/hero.svg';
import studyImage from '../../Assets/Icons/study.svg';
import giveClassesImage from '../../Assets/Icons/give-classes.svg';

import context from '../../Assets/Styles/themes/context';
import {ThemeContext} from 'styled-components';
import Switch from 'react-switch';

import {DiAptana} from 'react-icons/di';
import {RiArrowRightSLine} from 'react-icons/ri';
import { 
    Container, 
    PageLandingContent, 
    HeaderContainer,
    LogoContainer,
    Config,
    Themes,
    ButtonTheme,
    ButtonExit,
    ArrowButton,
    Footer
} from './styled';
import { Link } from 'react-router-dom';
import { config } from 'process';
import api from './../../Services/api';


function Landing() {
    const {theme,setTheme} = useContext(context);

    const {colors} = useContext(ThemeContext);
    const [viewThemes, setViewThemes] = useState(false);
    const [configs, setConfigs] = useState(false);
    const [dark, setDark] = useState(false);
    const [light, setLight] = useState(false);
    
    const toggleLight = () => {
        return setLight(theme.title === 'light' ? true : false);
    }

    const toggleDark = () => {
        setDark(theme.title == 'dark' ? true : false);
    }

    const [name, setName] = useState('');

    async function find(){
        const users = await api.get('/users/find', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(users);
        return setName(users.data.user.name);
    }

    useEffect(() => {
        toggleDark();
        toggleLight();
        find();
    }, []);

    const toggleViewThemes = () => {
        setViewThemes(viewThemes == false ? true : false);
    }

    const toggleViewConfigs = () => {
        setConfigs(configs == false ? true : false);
    }

    const offStyleTheme = {
        height: '0',
        opacity: "0",
        right: '1000',
        zIndex: -1,
    };

    const offConfigStyle={
        width: '5.6rem',
        height: '5.6rem',
        marginRight: '2rem',
        opacity: '0%',
        zIndex: 1,
    }

    return (
        <Container>
            <PageLandingContent>
                <HeaderContainer>

                    <Link to="perfil">
                        <img
                            src="https://pbs.twimg.com/profile_images/1142473888733061122/PkczdiXG_400x400.jpg"
                            alt=""
                        />
                        <p>{name}</p>
                    </Link>
                    <button
                        className="buttonPower"
                        onClick={toggleViewConfigs}
                    >
                        <span><DiAptana/></span>
                    </button>
                </HeaderContainer>
                {!configs 
                    ? 
                    <Config 
                        style={offConfigStyle}
                    >                    
                        <ArrowButton
                            style={
                                !configs
                                ?
                                {transform: 'rotate(180deg)',}
                                :
                                {transform: 'rotate(0deg)',}
                            }
                            onClick={toggleViewConfigs}
                        >
                                <RiArrowRightSLine/>
                        </ArrowButton>
                    </Config> 
                    :
                    <Config
                    style={
                        viewThemes ? 
                        {height: 'calc(100% - 10rem)'} 
                        : 
                        {
                            height: 'calc(100% - 30rem)',
                            transition: '1s'
                        }
                    }
                >
                    <ArrowButton
                        onClick={() => {
                            toggleViewConfigs();
                            setViewThemes(false);
                        }}
                    >
                        <RiArrowRightSLine/>
                    </ArrowButton>
                    <ButtonTheme
                        onClick={toggleViewThemes}
                    >
                        Themes
                    </ButtonTheme>
                    <Themes style=
                        {!viewThemes 
                            ? 
                            {...offStyleTheme}
                            : 
                            {
                                opacity: "100%",
                                position: "relative",
                                height: '20rem',
                            }
                    }>
                            <p>Dark</p>
                            <Switch 
                                checked={dark}
                                onChange = {setTheme}
                                width={60}
                                height={20}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                handleDiameter={30}
                                onColor={
                                    lighten(0.1, '#04D361')
                                }

                                offColor={
                                    shade(0.2, colors.exitButtonFeature)
                                }
                            />
                            <p>Light</p>
                            <Switch 
                                checked={light}
                                onChange = {setTheme}
                                width={60}
                                height={20}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                handleDiameter={30}
                                onColor={
                                    lighten(0.1, colors.secondary)
                                }

                                offColor={
                                    shade(0.2,colors.exitButtonFeature)
                                }
                            />
                    </Themes>

                    <ButtonExit
                        style={
                            !viewThemes
                            ?
                            {top: '-5rem'}
                            :
                            {top: '0'}
                        }
                    >Sair</ButtonExit>
                </Config>}
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