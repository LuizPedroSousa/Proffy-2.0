import React, { useState } from 'react';
import PageHeader from '../../Components/PageHeader';

import smileIcon from '../../Assets/Icons/smile.svg';

import './style.css'
import Select from './../../Components/Elements/Select/index';
import Input from './../../Components/Elements/Input/index';

function TeacherList() {
    const [searchTeachers, setSearchTeachers] = useState(false);

    function handleSearchTeachers() {
        if (!searchTeachers) {
            return setSearchTeachers(true);
        } else {
            return setSearchTeachers(false);
        }
    }
    return (
        <div className="teachers-container">
            <PageHeader
                title="Estes são os proffys disponíveis."
                navTitle="Estudar"
            >
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
                {searchTeachers && <form id="search-teachers">
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
            </PageHeader>

        </div>
    );
}

export default TeacherList;