import React, { useEffect, useState } from 'react';
import { getAllVeiculos } from '../services/VeiculoServices';


import '../global/global.css';
import './css/VisualizarVeiculosPage.css';

interface Veiculo {
    placa: string;
    modelo: string;
    marca: string;
    ano: number;
    combustivel: string;
    disponibilidade: string;
    cor: string;
    valorDiaria: number;
}

const Principal: React.FC = () => {
    const [carros, setCarros] = useState<Veiculo[]>([]);

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                const response = await getAllVeiculos();
                setCarros(response);
            } catch (error) {
                console.error('Erro ao buscar carros:', error);
            }
        };

        fetchCarros();

        const interval = setInterval(fetchCarros, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getStatusColor = (status: string) => {
        if (status === 'Disponível') {
            return 'disponivel';
        } else if (status === 'Alugado') {
            return 'alugado';
        } else if (status === 'Em Manutenção') {
            return 'manutencao';
        }
        return '';
    };

    return (
        <div className="principal-container-visualizar">
            <h2>VEÍCULOS CADASTRADOS</h2>
            <div className="carros-container">
                {carros.map((carro) => (
                    <div key={carro.placa} className="carro-card">
                        <div className="carro-info">
                            <div className="carro-info-item">
                                <span className="carro-info-label">Placa: </span>

                                <span className="carro-info">{carro.placa}</span>
                            </div>
                            <div className="carro-info-item">
                                <span className="carro-info-label">Modelo: </span>

                                <span className="carro-info">{carro.modelo}</span>
                            </div>
                            <div className="carro-info-item">
                                <span className="carro-info-label">Marca: </span>

                                <span className="carro-info">{carro.marca}</span>
                            </div>
                            <div className="carro-info-item">
                                <span className="carro-info-label">Ano: </span>
                                <span className="carro-info">{carro.ano}</span>
                            </div>
                            <div className="carro-info-item">
                                <span className="carro-info-label">Combustível: </span>
                                <span className="carro-info">{carro.combustivel}</span>
                            </div>
                            <div className="carro-info-item">
                                <span className="carro-info-label">Valor Diária: </span>

                                <span className="carro-info">R$ {carro.valorDiaria.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={`${getStatusColor(carro.disponibilidade)}`}>
                            {carro.disponibilidade}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Principal;
