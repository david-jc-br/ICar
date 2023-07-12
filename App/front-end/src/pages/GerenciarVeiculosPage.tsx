import React from 'react';
import { FaEdit, FaList, FaPlus, FaTrash } from 'react-icons/fa';

// css
import '../global/global.css';
import './css/GerenciarVeiculosPage.css';

const GerenciarVeiculos: React.FC = () => {
    return (
        <div className="gerenciar-veiculos-container">
            <h2>GERENCIAR VEÍCULOS</h2>

            <div className="gerenciar-veiculos-buttons">
                <button className="gerenciar-veiculos-button">
                    <FaPlus className="gerenciar-veiculos-icon" />
                    Cadastrar
                </button>

                <button className="gerenciar-veiculos-button">
                    <FaList className="gerenciar-veiculos-icon" />
                    Visualizar Veículos
                </button>

                <button className="gerenciar-veiculos-button">
                    <FaTrash className="gerenciar-veiculos-icon" />
                    Excluir
                </button>

                <button className="gerenciar-veiculos-button">
                    <FaEdit className="gerenciar-veiculos-icon" />
                    Atualizar
                </button>
            </div>
        </div>
    );
};

export default GerenciarVeiculos;
