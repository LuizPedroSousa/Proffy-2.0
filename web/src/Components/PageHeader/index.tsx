import React from 'react';

import './style.css';

import backIcon from '../../Assets/Icons/back.svg';
import logoImage from '../../Assets/Images/logo.svg';

import { Link } from 'react-router-dom'

interface PageHeaderProps {
    navTitle: string;
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="header-container">
            <nav className="menu-content">
                <div className="menu">
                    <Link to="/">
                        <img
                            src={backIcon}
                            alt="Voltar"
                        />
                    </Link>
                    <h1>{props.navTitle}</h1>
                    <img src={logoImage} alt="Proffy" />
                </div>
            </nav>
            <div className="content-container" id="content-container">
                <div className="content">
                    <div className="title">
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="childrens">
                        {props.children}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default PageHeader;