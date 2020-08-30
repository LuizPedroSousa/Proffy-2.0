import React from 'react';

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
    GridContainer4
} from './styled';

export default function PerfilUser() {
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
                <Form>
                    <Fieldset
                        title="Seus Dados"
                    >
                        <GridContainer1>
                            <Input
                                name="name"
                                label="Nome"
                                type="text"
                            />
                            <Input
                                name="surname"
                                label="Sobrenome"
                            />
                        </GridContainer1>
                        <GridContainer2>
                            <Input
                                name="email"
                                type="email"
                                label="E-mail"
                            />
                            <Input
                                name="whatsapp"
                                type="number"
                                label="Whatsapp"
                            />
                        </GridContainer2>
                        <TextArea
                            name="bio"
                            label="Biográfia"
                            description="(Máximo de 300 caracteres)"
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

                            />
                            <Input
                                name="price"
                                type="number"
                                label="Custo da sua hora por aula"
                            />
                        </GridContainer3>
                    </Fieldset>
                    <Fieldset
                        title="Horários Disponiveis"
                        complement="+ Novo horário"
                        classes="lastchild"
                    >
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
                    </Fieldset>
                    <Footer buttonName="Salvar Dados" />
                </Form>
            </section>
        </PerfilContainer >
    );
}