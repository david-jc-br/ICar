import React from 'react';
import { FaEdit, FaList, FaPlus, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router';

// css
import '../global/global.css';
import './css/GerenciarVeiculosPage.css';

const GerenciarVeiculos: React.FC = () => {
    const navigate = useNavigate();

    const handleCadastrarClick = () => {
        navigate('/cadastrarVeiculo'); 
    };

    const handleVisualizarClick = () => {
        navigate('/visualizarVeiculos'); 
    };

    const handleExcluirClick = () => {
        navigate('/excluirVeiculo'); 
    };

    const handleAtualizarClick = () => {
        navigate('/atualizarVeiculo'); 
    };

    return (
        <div className="gerenciar-veiculos-container">
            <h2>GERENCIAR VEÍCULOS</h2>

            <div className="gerenciar-veiculos-buttons">
                <button className="gerenciar-veiculos-button" onClick={handleCadastrarClick}>
                    <FaPlus className="gerenciar-veiculos-icon" />
                    Cadastrar
                </button>

                <button className="gerenciar-veiculos-button" onClick={handleVisualizarClick}>
                    <FaList className="gerenciar-veiculos-icon" />
                    Visualizar Veículos
                </button>

                <button className="gerenciar-veiculos-button" onClick={handleExcluirClick}>
                    <FaTrash className="gerenciar-veiculos-icon" />
                    Excluir
                </button>

                <button className="gerenciar-veiculos-button" onClick={handleAtualizarClick}>
                    <FaEdit className="gerenciar-veiculos-icon" />
                    Atualizar
                </button>
            </div>
        </div>
    );
};

export default GerenciarVeiculos;
