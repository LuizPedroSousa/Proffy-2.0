import React, { useState, FormEvent } from 'react';

import {
    TeacherFormContainer,
    LastFieldset,
    LastLegend,
    GridContainer1,
    GridContainer2,
    GridContainer3,
} from './styled';
import PageHeader from '../../Components/PageHeader';

import rocketIcon from '../../Assets/Icons/rocket.svg';
import importantIcon from '../../Assets/Icons/important.svg';

import Footer from '../../Components/Elements/Footer';
import Form from '../../Components/Elements/Form';
import Fieldset from '../../Components/Elements/Fieldset';
import Input from './../../Components/Elements/Input/index';
import TextArea from './../../Components/Elements/TextArea/index';
import Select from './../../Components/Elements/Select/index';

export default function TeacherForm() {
    const [scheduleItem, SetScheduleItem] = useState([
        { week_day: 0, from: "6", to: "12" }
    ]);

    const [whatsapp, setWhatssap] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [price, setPrice] = useState('');

    function addNewScheduleItem() {
        return SetScheduleItem([
            ...scheduleItem,
            { week_day: 0, from: "6", to: "12" }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItemValue = scheduleItem.map((schedule, index) => {
            if (position === index) {
                return { ...schedule, [field]: value };
            }
            console.log(scheduleItem);
            return schedule;
        });
        SetScheduleItem(updatedScheduleItemValue);
    }

    function createClasses(e: FormEvent) {
        e.preventDefault();
        console.log({
            whatsapp,
            bio,
            subject,
            price,
            scheduleItem,
        })
    }
    return (
        <TeacherFormContainer>
            <PageHeader
                navTitle="Dar Aulas"
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição."
            >
                <p>
                    Prepare-se!
                    <p>vai ser o maximo.</p>
                </p>
                <img src={rocketIcon} alt="Foguete" />
            </PageHeader>
            <section>
                <Form
                    classes="form"
                    onSubmit={createClasses}
                >
                    <Fieldset title="Seus Dados">
                        <GridContainer1>
                            <div>
                                <img
                                    src="https://pbs.twimg.com/profile_images/1142473888733061122/PkczdiXG_400x400.jpg"
                                    alt="Avatar"
                                />
                                <strong>Luiz Pedro</strong>
                            </div>
                            <Input
                                name="whatsapp"
                                label="Whatsapp"
                                type="text"
                                value={whatsapp}
                                onChange={e => setWhatssap(e.target.value)}
                            />
                        </GridContainer1>
                        <TextArea
                            label="Biográfia"
                            description="(Máximo 300 caracteres)"
                            name="bio"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                        />
                    </Fieldset>
                    <Fieldset title="Sobre a aula">
                        <GridContainer2>
                            <Select
                                label="Matéria"
                                name="subject"
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
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                            />
                            <Input
                                type="text"
                                label="Custo da sua aula por hora"
                                name="price"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </GridContainer2>
                    </Fieldset>
                    <LastFieldset>
                        <LastLegend>
                            Horários Disponiveis
                            <p onClick={addNewScheduleItem}>+ Novo horário</p>
                        </LastLegend>
                        {scheduleItem.map((schedule, index) => {
                            return (
                                <GridContainer3 key={schedule.week_day}>
                                    <Select
                                        name="week_day"
                                        padrao="Selecione um dia"
                                        value={schedule.week_day}
                                        options={[
                                            { value: "0", label: "Domingo" },
                                            { value: "1", label: "Segunda-feira" },
                                            { value: "2", label: "Terça-feira" },
                                            { value: "3", label: "Quarta-feira" },
                                            { value: "4", label: "Quinta-feira" },
                                            { value: "5", label: "Sexta-feira" },
                                            { value: "6", label: "Sabado" },
                                        ]}
                                        label="Dia da semana"
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={schedule.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={schedule.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </GridContainer3>
                            );
                        })}
                    </LastFieldset>
                    <Footer
                        buttonName="Salvar Cadastro"
                    />
                </Form>
            </section>
        </TeacherFormContainer>
    );
}