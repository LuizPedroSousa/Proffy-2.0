import React, { useState, FormEvent } from 'react';

import PageHeader from './../../Components/PageHeader/index';
import backgroundImage from '../../Assets/Images/background-perfil.svg';
import Input from './../../Components/Elements/Input/index';
import Fieldset from '../../Components/Elements/Fieldset/index';
import Form from '../../Components/Elements/Form/index';
import TextArea from './../../Components/Elements/TextArea/index';
import Select from '../../Components/Elements/Select/index';
import Footer from '../../Components/Elements/Footer/index';

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

    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');

    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [price, setPrice] = useState('');

    const [scheduleItem, setScheduleItem] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItem([
            ...scheduleItem,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue() {

    }

    function saveData(e: FormEvent) {
        e.preventDefault();
        return console.log({
            name,
            surName,
            email,
            whatsapp,
            bio,
            subject,
            price,
            scheduleItem,
        })
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
                        Luiz Pedro
                        </strong>
                    <p>Programação</p>
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
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <Input
                                name="surname"
                                label="Sobrenome"
                                value={surName}
                                onChange={e => setSurName(e.target.value)}
                            />
                        </GridContainer1>
                        <GridContainer2>
                            <Input
                                name="email"
                                type="email"
                                label="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Input
                                name="whatsapp"
                                type="number"
                                label="Whatsapp"
                                value={whatsapp}
                                onChange={e => setWhatsapp(e.target.value)}
                            />
                        </GridContainer2>
                        <TextArea
                            name="bio"
                            label="Biográfia"
                            description="(Máximo de 300 caracteres)"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
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
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                            />
                            <Input
                                name="price"
                                type="number"
                                label="Custo da sua hora por aula"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
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