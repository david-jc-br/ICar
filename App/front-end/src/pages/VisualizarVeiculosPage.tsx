import React, { useEffect, useState } from 'react';
import { getAllVeiculos } from '../services/VeiculoServices';
import './css/PrincipalPage.css';

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

        const interval = setInterval(fetchCarros, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getStatusColor = (status: string) => {
        if (status === 'Disponível') {
            return 'green';
        } else if (status === 'Alugado') {
            return 'blue';
        } else if (status === 'Em Manutenção') {
            return 'red';
        }
        return '';
    };

    return (
        <div className="principal-container">
            <h2>VEÍCULOS DISPONÍVEIS</h2>
            <div className="carros-container">
                {carros.map((carro) => (
                    <div key={carro.placa} className="carro-card">
                        <div className="carro-header">
                            <div className="carro-modelo">{carro.modelo}</div>
                            <div className="carro-marca">{carro.marca}</div>
                        </div>
                        <div className="carro-info">
                            <div className="carro-info-item">
                                <span className="carro-info-label">Placa:</span>
                                <span>{carro.placa}</span>
                            </div>
                            <div className="carro-info-item">
                                <span className="carro-info-label">Ano:</span>
                                <span>{carro.ano}</span>
                            </div>
                            <div className="carro-info-item">
                                <span className="carro-info-label">Combustível:</span>
                                <span>{carro.combustivel}</span>
                            </div>
                            <div className="carro-info-item">
                                <span className="carro-info-label">Valor Diária:</span>
                                <span>R$ {carro.valorDiaria.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={`carro-status ${getStatusColor(carro.disponibilidade)}`}>
                            {carro.disponibilidade}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Principal;
