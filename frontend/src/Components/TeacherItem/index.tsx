import React from 'react';

import {
    TeacherItemContainer,
    Header,
    Section,
    Footer,
    TextContent,
    Childrens
} from './styled'

export interface TeacherItemProps {
    id: number;
    name: string;
    subject: string;
    avatar: string;
    bio: string;
    price: number;
    whatsapp: string;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = (props) => {
    return (
        <TeacherItemContainer>
            <Header>
                <img src={props.avatar} alt="Luiz" />
                <div>
                    <strong>{props.name}</strong>
                    <p>{props.subject}</p>
                </div>
            </Header>
            <Section>
                <p>{props.bio}</p>
                <Childrens>
                    {props.children}
                </Childrens>
            </Section>
            <Footer>
                <TextContent>
                    <p>Preço/hora</p>
                    <strong>{`R$ ${props.price}`}</strong>
                </TextContent>
                <a href="#">
                    <span>
                        <i className="fab fa-whatsapp"></i>
                    </span>
                    <p>Entrar em contato</p>
                </a>
            </Footer>
        </TeacherItemContainer>
    );
}

export default TeacherItem;