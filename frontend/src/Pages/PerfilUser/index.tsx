import React, { useState, FormEvent, useEffect, useRef } from 'react';

import PageHeader from './../../Components/PageHeader/index';
import backgroundImage from '../../Assets/Images/background-perfil.svg';
import Input from './../../Components/Elements/Input/index';
import Fieldset from '../../Components/Elements/Fieldset/index';
import Form from '../../Components/Elements/Form/index';
import TextArea from './../../Components/Elements/TextArea/index';
import Select from '../../Components/Elements/Select/index';
import Footer from '../../Components/Elements/Footer/index';

import api from './../../Services/api';
import {
    PerfilContainer,
    UserContent,
    GridContainer1,
    GridContainer2,
    GridContainer3,
    LastFieldset,
    LastLegend,
    GridContainer4
} from './styled';

export default function PerfilUser() {

    const name = useRef<HTMLInputElement>(null);
    const surName = useRef<HTMLInputElement>(null);

    const email = useRef<HTMLInputElement>(null);
    const whatsapp = useRef<HTMLInputElement>(null);

    const bio = useRef<HTMLTextAreaElement>(null);

    const subject = useRef<HTMLSelectElement>(null);
    const price = useRef<HTMLInputElement>(null);

    const [namePlace, setNamePlace] = useState('');
    const [surNamePlace, setSurNamePlace] = useState('');
    const [emailPlace, setEmailPlace] = useState('');


    const [scheduleItem, setScheduleItem] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    const [userName, setUserName] = useState('');
    const [userSubject, setUserSubject] = useState('');
    function addNewScheduleItem() {
        setScheduleItem([
            ...scheduleItem,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue() {

    }

    async function find() {
        const users = await api.get('/users/find', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        setNamePlace(users.data.user.name);
        setSurNamePlace(users.data.user.surname);
        setEmailPlace(users.data.user.email);
        return setUserName(users.data.user.name);
    }

    useEffect(() => {
        find();
    }, [])

    function saveData(e: FormEvent) {
        e.preventDefault();
    }
    return (
        <PerfilContainer>
            <PageHeader
                navTitle="Meu Perfil"
                styles={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <UserContent>
                    <img
                        src="https://pbs.twimg.com/profile_images/1142473888733061122/PkczdiXG_400x400.jpg"
                        alt="Luiz Pedro"
                    />
                    <span>
                        <i className="fas fa-camera"></i>
                    </span>
                    <strong>
                        {userName}
                    </strong>
                    {
                        userSubject == ''
                            ?
                            <p>Aluno</p>
                            :
                            <p>userSubject</p>
                    }
                </UserContent>
            </PageHeader>
            <section>
                <Form onSubmit={saveData}>
                    <Fieldset
                        title="Seus Dados"
                    >
                        <GridContainer1>
                            <Input
                                name="name"
                                label="Nome"
                                type="text"
                                ref={name}
                                placeholder={namePlace}
                            />
                            <Input
                                name="surname"
                                label="Sobrenome"
                                placeholder={surNamePlace}
                                ref={surName}
                            />
                        </GridContainer1>
                        <GridContainer2>
                            <Input
                                name="email"
                                type="email"
                                label="E-mail"
                                placeholder={emailPlace}
                                ref={email}
                            />
                            <Input
                                name="whatsapp"
                                type="number"
                                label="Whatsapp"
                                ref={whatsapp}
                            />
                        </GridContainer2>
                        <TextArea
                            name="bio"
                            label="Biográfia"
                            description="(Máximo de 300 caracteres)"
                            ref={bio}
                        />
                    </Fieldset>
                    <Fieldset
                        title="Sobre a aula"
                    >
                        <GridContainer3>
                            <Select
                                name="subject"
                                label="Matéria"
                                padrao="Selecione uma matéria"
                                options={[
                                    { value: "Matemática", label: "Matemática" },
                                    { value: "Fisica", label: "Fisica" },
                                    { value: "Artes", label: "Artes" },
                                    { value: "Geografia", label: "Geografia" },
                                    { value: "Filosofia", label: "Filosofia" },
                                    { value: "Ciências", label: "Ciências" },
                                    { value: "Inglês", label: "Inglês" },
                                    { value: "Biologia", label: "Biologia" },
                                    { value: "Quimica", label: "Quimica" },
                                ]}
                                ref={subject}
                            />
                            <Input
                                name="price"
                                type="number"
                                label="Custo da sua hora por aula"
                                ref={price}
                            />
                        </GridContainer3>
                    </Fieldset>
                    <LastFieldset>
                        <LastLegend>
                            Horários disponiveis
                            <p onClick={addNewScheduleItem}>
                                + Novo Horário
                            </p>
                        </LastLegend>
                        {scheduleItem.map((schedule, index) => {
                            return (
                                <GridContainer4>
                                    <Select
                                        name="week_day"
                                        padrao="Selecione um dia"
                                        label="Dia da semana"
                                        key={schedule.week_day}
                                        options={[
                                            { value: "0", label: "Domingo" },
                                            { value: "1", label: "Segunda-feira" },
                                            { value: "2", label: "Terça-feira" },
                                            { value: "3", label: "Quarta-feira" },
                                            { value: "4", label: "Quinta-feira" },
                                            { value: "5", label: "Sexta-feira" },
                                            { value: "6", label: "Sabado" },
                                        ]}
                                    />
                                    <Input
                                        type="number"
                                        label="Das"
                                        name="from"
                                    />
                                    <Input
                                        type="number"
                                        label="Até"
                                        name="to"
                                    />
                                </GridContainer4>
                            );
                        })}
                    </LastFieldset>
                    <Footer buttonName="Salvar Dados" />
                </Form>
            </section>
        </PerfilContainer >
    );
}