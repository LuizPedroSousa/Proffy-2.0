import React from 'react';
import PageHeader from '../../Components/PageHeader';

import smileIcon from '../../Assets/Icons/smile.svg';

import './style.css'
import Select from './../../Components/Elements/Select/index';

function TeacherList() {
    return (
        <div className="teachers-container">
            <PageHeader
                title="Estes são os proffys disponíveis."
                navTitle="Estudar"
            >
                <img src={smileIcon} alt="Emote Sorrindo" />
                <p>Nós temos 32 professores.</p>
            </PageHeader>
            <form id="search-teachers">
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
            </form>
        </div>
    );
}

export default TeacherList;