import React from 'react';

import './style.css'

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
        <article className="teacher-item">
            <header>
                <img src={props.avatar} alt="Luiz" />
                <div>
                    <strong>{props.name}</strong>
                    <p>{props.subject}</p>
                </div>
            </header>
            <section>
                <p>{props.bio}</p>
                <div>
                    {props.children}
                </div>
            </section>
            <footer>
                <div className="text">
                    <p>Preço/hora</p>
                    <strong>{`R$ ${props.price}`}</strong>
                </div>
                <a href="#">
                    <span>
                        <i className="fab fa-whatsapp"></i>
                    </span>
                    <p>Entrar em contato</p>
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;