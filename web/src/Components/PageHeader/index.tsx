import React from 'react';

import {
    Container,
    Header,
    ContainerChildrens,
    Content,
    Childrens
} from './styled';

import backIcon from '../../Assets/Icons/back.svg';
import logoImage from '../../Assets/Images/logo.svg';

import { Link } from 'react-router-dom'

interface PageHeaderProps {
    navTitle: string;
    title?: string;
    description?: string;
    styles?: object;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <Container>
            <Header>
                <div>
                    <Link to="/">
                        <img
                            src={backIcon}
                            alt="Voltar"
                        />
                    </Link>
                    <h1>{props.navTitle}</h1>
                    <img src={logoImage} alt="Proffy" />
                </div>
            </Header>
            <ContainerChildrens className="content-container" style={props.styles}>
                <Content className="content">
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                    <Childrens className="childrens">
                        {props.children}
                    </Childrens>
                </Content>
            </ContainerChildrens>
        </Container>
    );
}

export default PageHeader;