import React, { useState, FormEvent } from 'react';
import PageHeader from '../../Components/PageHeader';

import smileIcon from '../../Assets/Icons/smile.svg';

import './style.css'
import Select from './../../Components/Elements/Select/index';
import Input from './../../Components/Elements/Input/index';
import TeacherItem from './../../Components/TeacherItem/index';
import TimeCard from './../../Components/TimeCard/index';

function TeacherList() {
    const [searchTeachers, setSearchTeachers] = useState(false);

    function handleSearchTeachers() {
        if (!searchTeachers) {
            return setSearchTeachers(true);
        } else {
            return setSearchTeachers(false);
        }
    }

    function handleToggleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <div className="teachers-container">
            <PageHeader
                title="Estes são os proffys disponíveis."
                navTitle="Estudar"
            >
                <div className="description-container">
                    <div className="description-content">
                        <img src={smileIcon} alt="Emote Sorrindo" />
                        <p>Nós temos 32 professores.</p>
                        {!searchTeachers &&
                            <button id="filter" onClick={handleSearchTeachers}>
                                <span
                                    className="iconify"
                                    data-icon="mdi-filter-plus"
                                    data-inline="false">
                                </span>
                            </button>
                        }
                        {
                            searchTeachers &&
                            <button id="none-filter" onClick={handleSearchTeachers}>
                                <span
                                    className="iconify"
                                    data-icon="clarity:filter-off-solid"
                                    data-inline="false">
                                </span>
                            </button>
                        }
                    </div>
                    {searchTeachers && <form id="search-teachers" onSubmit={handleToggleSubmit}>
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
                        />
                        <Select
                            name="week_day"
                            label="Dia da semana"
                            padrao="Selecione um dia"
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
                            name="time"
                            label="Horário"
                            type="time"
                        />
                        <button>
                            <span><i className="fab fa-searchengin"></i></span>
                        </button>
                    </form>
                    }
                </div>
            </PageHeader>
            <main>
                <TeacherItem
                    name="Luiz Pedro"
                    bio="Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
                    price={20}
                    subject="Programing"
                    whatsapp="1111111"
                    avatar="https://pbs.twimg.com/profile_images/1275547289885573120/RHfriB2O_400x400.jpg"
                    id={1}
                >
                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Segunda" },
                        ]}
                    />
                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "1", label: "Terça" },
                        ]}
                    />
                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Quarta" },
                        ]}
                    />

                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Quinta" },
                        ]}
                    />

                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Sexta" },
                        ]}
                    />

                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Sabado" },
                        ]}
                    />

                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Domingo" },
                        ]}
                    />

                </TeacherItem>

                <TeacherItem
                    name="Luiz Pedro"
                    bio="Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
                    price={20}
                    subject="Programing"
                    whatsapp="1111111"
                    avatar="https://pbs.twimg.com/profile_images/1275547289885573120/RHfriB2O_400x400.jpg"
                    id={1}
                >
                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Domingo" },
                        ]}
                    />
                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Domingo" },
                        ]}
                    />
                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Domingo" },
                        ]}
                    />
                </TeacherItem>

                <TeacherItem
                    name="Luiz Pedro"
                    bio="Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
                    price={20}
                    subject="Programing"
                    whatsapp="1111111"
                    avatar="https://pbs.twimg.com/profile_images/1275547289885573120/RHfriB2O_400x400.jpg"
                    id={1}
                >
                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Domingo" },
                        ]}
                    />
                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Domingo" },
                        ]}
                    />
                    <TimeCard
                        time={[
                            { from: 20, to: 10 },
                        ]}
                        week_day={[
                            { value: "0", label: "Domingo" },
                        ]}
                    />
                </TeacherItem>
            </main>
        </div>
    );
}

export default TeacherList;