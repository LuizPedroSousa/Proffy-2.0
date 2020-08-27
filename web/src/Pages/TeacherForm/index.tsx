import React from 'react';

import './style.css';
import PageHeader from '../../Components/PageHeader';

import rocketIcon from '../../Assets/Icons/rocket.svg';
import importantIcon from '../../Assets/Icons/important.svg';

import Input from './../../Components/Elements/Input/index';
import TextArea from './../../Components/Elements/TextArea/index';
import Select from './../../Components/Elements/Select/index';

export default function TeacherForm() {
    return (
        <div className="teacher-form-container">
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
                <form>
                    <main>
                        <fieldset>
                            <legend>Seus Dados</legend>
                            <div className="perfil">
                                <img src="https://pbs.twimg.com/profile_images/1142473888733061122/PkczdiXG_400x400.jpg" alt="Luiz Pedro" />
                                <p>Luiz Pedro</p>
                            </div>
                            <Input
                                label="Whatsapp"
                                name="whatsapp"
                                type="number"
                            />
                            <TextArea
                                name="bio"
                                label="Biográfia"
                                description="(Máximo 300 caracteres)"
                                maxLength={300}
                            />
                        </fieldset>
                        <fieldset className="select">
                            <legend>Sobre a aula</legend>
                            <div>
                                <Select
                                    label="Matéria"
                                    name="subject"
                                    padrao="Selecione qual matéria você quer ensinar"
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
                                    label="Custo da sua aula por hora"
                                    name="price"
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Horários Disponiveis
                                <p>+ Novo horário</p>
                            </legend>
                            <div>
                                <Select
                                    label="Dia da semana"
                                    name="week_day"
                                    padrao="Selecione o dia"
                                    options={[
                                        { value: "0", label: "Domingo" },
                                        { value: "1", label: "Segunda-feira" },
                                        { value: "2", label: "Terça-feira" },
                                        { value: "3", label: "Quarta-feira" },
                                        { value: "4", label: "Quinta-feira" },
                                        { value: "5", label: "Sexta-feira" },
                                    ]}
                                />
                                <Input
                                    name="from"
                                    label="Das"
                                    type="time"
                                />
                                <Input
                                    name="to"
                                    label="Até"
                                    type="time"
                                />
                            </div>
                        </fieldset>
                    </main>
                    <footer>
                        <div>
                            <img
                                src={importantIcon}
                                alt="Aviso"
                            />
                            <p>
                                Importante!
                                    <p>Preencha todos os dados corretamente.</p>
                            </p>
                        </div>
                        <button type="submit">
                            Salvar Cadastro
                            </button>
                    </footer>
                </form>
            </section>
        </div>
    );
}