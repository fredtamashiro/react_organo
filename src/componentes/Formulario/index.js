import React, { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import useTimes from '../../data/Times';
import './Formulario.css';

const Formulario = (props) => {
    const [listaTimes] = useTimes();
    const [formData, setFormData] = useState({
        nome: '',
        cargo: '',
        imagem: '',
        times: ''
    });

    const aoAlterarCampo = (evento) => {
        const { name, value } = evento.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoColaboradorSalvo({
            id: Date.now(),
            nome: formData.nome,
            cargo: formData.cargo,
            imagem: formData.imagem,
            times: formData.times
        });
        
        setFormData({
            nome: '',
            cargo: '',
            imagem: '',
            times: ''
        });
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    name="nome" 
                    label="Nome"
                    obrigatorio="required" 
                    valor={formData.nome}
                    aoAlterado={aoAlterarCampo}
                />
                <CampoTexto
                    name="cargo" 
                    label="Cargo"
                    valor={formData.cargo}
                    aoAlterado={aoAlterarCampo}
                />
                <CampoTexto
                    name="imagem" 
                    label="Imagem"
                    valor={formData.imagem}
                    aoAlterado={aoAlterarCampo}
                />
                <ListaSuspensa
                    name="times" 
                    label="Times"
                    itens={listaTimes}
                    valor={formData.times}
                    aoAlterado={aoAlterarCampo}
                />
                <Botao>
                    Cadastrar
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;
