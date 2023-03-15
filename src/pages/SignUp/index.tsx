import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import api from "../../services/services";
import { Container } from "./SignUpStyle";
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";

export default function Home() {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [newUser, setNewUser] = useState(
        {
            CPForCNPJ: '',
            fantasyName: '',
            businessName: '',
            adress: '',
            city: '',
            contact: '',
            telephone: '',
            email: '',
            neighborhood: '',
            uf: '',
            cep: ''
        }
    )

    async function verifyIfHaveCPForCNPJ() {
        const response = await api.get(`/persons`);
        const data = (response.data);

        const hasCPForCNPJ = data.some((usuario: any) => usuario.CPForCNPJ === newUser.CPForCNPJ);

        if (hasCPForCNPJ) {
            toast.warn('Já existe um usuário com esse CPF/CNPJ!')
            return true;
        }

        return false;
    }

    async function handleSubmit(e: any) {
        e.preventDefault();

        const hasCPForCNPJ = await verifyIfHaveCPForCNPJ();

        if (hasCPForCNPJ) {
            return;
        }

        fetch("http://localhost:3201/sistema/persons", {
            method: "post",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {

                // faça algo com a resposta da API
            })
            .catch(error => {
                console.error("Erro ao enviar os dados para a API:", error);
            });
        toast.success('Usuário criado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setShouldRedirect(true);
    }

    function cancelCreate() {
        setShouldRedirect(true);
    }

    function handleInputChange(e: any) {
        const { name, value } = e;

        setNewUser(prevState => {
            return { ...prevState, [name]: value }
        });

    }


    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const regex = /^[a-zA-Z0-9" "]*$/; // expressão regular para permitir somente letras e números
        const key = String.fromCharCode(event.keyCode || event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
        }
    };


    return (
        <div>
            {shouldRedirect && <Navigate to="/" />}
            <Container className="container">
                <h1>Cadastro de Pessoas</h1>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <div className="inputs-container">
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="CPForCNPJ">CPF ou CNPJ</label>
                            <input
                                type="text"
                                id="CPForCNPJ"
                                name="CPForCNPJ"
                                placeholder="Insira o seu nome"
                                minLength={11}
                                maxLength={14}
                                onKeyPress={handleKeyPress}
                                required
                                value={newUser.CPForCNPJ}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="contact">Contato</label>
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                onKeyPress={handleKeyPress}
                                placeholder="Insira o seu nome"
                                minLength={3}
                                maxLength={100}
                                required
                                value={newUser.contact}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="fantasyName">Nome Fantasia</label>
                            <input
                                type="text"
                                id="fantasyName"
                                onKeyPress={handleKeyPress}
                                name="fantasyName"
                                placeholder="Insira o seu nome"
                                minLength={3}
                                maxLength={100}
                                required
                                value={newUser.fantasyName}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="telephone">Telefone do Contato</label>
                            <input
                                type="tel"
                                id="telephone"
                                name="telephone"
                                onKeyPress={handleKeyPress}
                                placeholder="Insira o seu nome"
                                minLength={11}
                                maxLength={11}
                                required
                                value={newUser.telephone}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="businessName">Razão Social</label>
                            <input
                                type="text"
                                id="businessName"
                                onKeyPress={handleKeyPress}
                                name="businessName"
                                placeholder="Insira o seu nome"
                                minLength={3}
                                maxLength={100}
                                required
                                value={newUser.businessName}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="email">E-mail de Contato</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onKeyPress={handleKeyPress}
                                placeholder="Insira o seu nome"
                                minLength={3}
                                maxLength={100}
                                required
                                value={newUser.email}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="adress">Endereço</label>
                            <input
                                type="text"
                                id="adress"
                                name="adress"
                                onKeyPress={handleKeyPress}
                                placeholder="Insira o seu nome"
                                minLength={3}
                                maxLength={100}
                                required
                                value={newUser.adress}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="neighborhood">Bairro</label>
                            <input
                                type="text"
                                id="neighborhood"
                                name="neighborhood"
                                onKeyPress={handleKeyPress}
                                placeholder="Insira o seu nome"
                                minLength={3}
                                maxLength={100}
                                required
                                value={newUser.neighborhood}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="city">Cidade</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                onKeyPress={handleKeyPress}
                                placeholder="Insira o seu nome"
                                minLength={3}
                                maxLength={100}
                                required
                                value={newUser.city}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="uf">UF</label>
                            <input
                                type="text"
                                id="uf"
                                name="uf"
                                onKeyPress={handleKeyPress}
                                placeholder="Insira o seu nome"
                                minLength={2}
                                maxLength={2}
                                required
                                value={newUser.uf}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="col col-lg-5 user-insert">
                            <label htmlFor="cep">CEP</label>
                            <input
                                type="text"
                                id="cep"
                                onKeyPress={handleKeyPress}
                                name="cep"
                                placeholder="Insira o seu nome"
                                minLength={8}
                                maxLength={8}
                                required
                                value={newUser.cep}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                    </div>
                    <div className="buttons-container">
                        <ButtonCancel onClick={cancelCreate} text="Cancelar" className="" />
                        <Button typeHTML="submit" text="Salvar" className="" />
                    </div>
                </form>
            </Container>
        </div>
    )
}