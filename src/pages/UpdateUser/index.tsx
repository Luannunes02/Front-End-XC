import React, { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom"
import api from "../../services/services";
import { Container } from "./updateUser";
import { toast } from 'react-toastify';

import Button from "../../components/Button";
import ButtonCancel from "../../components/ButtonCancel";

export default function UpdateUser() {
    const { id } = useParams();
    const [showInfo, setShowInfo] = useState(false);
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

    useEffect(() => {
        loadUsuario();
    }, [])

    useEffect(() => {
        if (newUser !== undefined) setShowInfo(true);
    }, [newUser])

    async function loadUsuario() {
        const response = await api.get(`/persons/${id}`);
        setNewUser(response.data);
    }

    function handleSubmit(e: any) {
        e.preventDefault();        

        fetch(`http://localhost:3201/sistema/persons/${id}`, {
            method: "put",
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
        toast.success('Usuário alterado com sucesso!', {
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

    return (
        <div>
            {shouldRedirect && <Navigate to="/" />}
            {
                !showInfo
                    ?
                    <div></div>
                    :
                    <Container className="container">
                        <h1>Alteração de cadastro de Pessoas</h1>
                        <form action="" onSubmit={(e) => handleSubmit(e)}>
                            <div className="inputs-container">
                                <div className="col col-lg-5 user-insert">
                                    <label htmlFor="CPForCNPJ">CPF ou CNPJ</label>
                                    <input
                                        readOnly={true}
                                        type="text"
                                        id="CPForCNPJ"
                                        name="CPForCNPJ"
                                        placeholder="Insira o seu nome"
                                        minLength={11}
                                        maxLength={14}
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
                                        type="text"
                                        id="telephone"
                                        name="telephone"
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
                                        type="text"
                                        id="email"
                                        name="email"
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
                                <Button text="Salvar" className="" />
                            </div>
                        </form>
                    </Container>
            }
        </div>
    )
}