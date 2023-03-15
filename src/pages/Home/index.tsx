import React, { useState, useEffect } from "react";
import api from '../../services/services';
import { Link, Navigate } from "react-router-dom"
import { Container } from "./HomeStyle";
import Button from "../../components/Button";
import Delete from "../../assets/delete.png";
import Edit from "../../assets/edit.png";
import { toast } from 'react-toastify';

export default function Home() {
    const [usuarios, setUsuarios] = useState([]);
    const [allUsuarios, setAllUsuarios] = useState([]);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        loadUsuarios();
    }, [])

    useEffect(() => {
        if (usuarios !== undefined) {
            setShowInfo(true);
        }
    }, [usuarios]);

    async function loadUsuarios() {
        const response = await api.get(`/persons`);
        const data = response.data;
        const modifyData = data.map((item: any, index: number) => {
            item.code = index + 1;
            return item;
        })
        setAllUsuarios(modifyData);
        setUsuarios(modifyData);
    }

    function deleteUser(id: String) {
        fetch(`http://localhost:3201/sistema/persons/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .catch(error => {
                console.error("Erro ao enviar os dados para a API:", error);
            });

        toast.success('Usuário excluido com sucesso!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setTimeout(() => {
            loadUsuarios();
        }, 1000)
    }

    function filter() {
        const $code = document.getElementById('code') as HTMLInputElement;
        const $fantasyName = document.getElementById('fantasyName') as HTMLInputElement;
        const $businessName = document.getElementById('businessName') as HTMLInputElement;

        if ($code.value === "" && $fantasyName.value === "" && $businessName.value === "") {
            toast.warn('Preencha algum filtro!')
            return;
        }

        let filterUser = allUsuarios.filter((item: any) => {
            return (item.code.toString() === $code.value || item.fantasyName === $fantasyName.value.toUpperCase() || item.businessName === $businessName.value.toUpperCase())
        });
        setUsuarios(filterUser);
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
                        <h1>Listagem de pessoas</h1>
                        <fieldset>
                            <div className="inputs-container">
                                <div className="col col-lg-3 user-insert">
                                    <label htmlFor="code">Código</label>
                                    <input
                                        type="text"
                                        id="code"
                                        name="code"
                                    />
                                </div>
                                <div className="col col-lg-8 user-insert">
                                    <label htmlFor="fantasyName">Nome Fantasia</label>
                                    <input
                                        type="text"
                                        id="fantasyName"
                                        name="fantasyName"
                                    />
                                </div>
                                <div className="col col-lg-8 user-insert">
                                    <label htmlFor="businessName">Razão Social</label>
                                    <input
                                        type="text"
                                        id="businessName"
                                        name="businessName"
                                    />
                                </div>
                                <Button typeHTML="" onClick={filter} text="Filtrar" className="col col-lg-2" />
                            </div>
                        </fieldset>
                        <div className="row include-btn-container">
                            <Link to="/create">
                                <Button typeHTML="" text="Incluir" className="col col-lg-1" />
                            </Link>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Código</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Cidade</th>
                                        <th scope="col">UF</th>
                                        <th scope="col">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((usuario: any) => (
                                        <tr key={usuario._id}>
                                            <th scope="row">{usuario.code}</th>
                                            <td>{usuario.fantasyName}</td>
                                            <td>{usuario.city}</td>
                                            <td>{usuario.uf}</td>
                                            <td>
                                                <Link to={`/update/${usuario._id}`}>
                                                    <img src={Edit} alt="Editar" className="image" />
                                                </Link>
                                                <img onClick={() => deleteUser(usuario._id)} src={Delete} alt="Editar" className="image" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Container>
            }
        </div>
    )
}