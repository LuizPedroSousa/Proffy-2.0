import React from 'react';

import {
    TeacherFormContainer,
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
                <Form classes="form">
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
                                type="number"
                            />
                        </GridContainer1>
                        <TextArea
                            label="Biográfia"
                            description="(Máximo 300 caracteres)"
                            name="bio"
                        />
                    </Fieldset>
                    <Fieldset title="Sobre a aula">
                        <GridContainer2>
                            <Select
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
                                label="Matéria"
                            />
                            <Input 
                                type="number"
                                label="Custo da sua aula por hora"
                                name="price"
                            />
                        </GridContainer2>
                    </Fieldset>
                    <Fieldset
                        title="Horários disponiveis"
                        complement="+ Novo horário"
                        classes="lastchild"
                    >
                        <GridContainer3>
                            <Select
                                name="week_day"
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
                                label="Dia da semana"
                            />
                            <Input
                                name="from"
                                label="Das"
                                type="number"
                            />
                            <Input
                                name="to"
                                label="Até"
                                type="number"
                            />
                        </GridContainer3>
                    </Fieldset>
                    <Footer
                        buttonName="Salvar Cadastro"
                    />
                </Form>
            </section>
        </TeacherFormContainer>
    );
}