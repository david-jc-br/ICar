import React, { useEffect, useState } from 'react';
import { getVeiculosDisponiveis } from '../services/VeiculoServices';
import { useNavigate } from 'react-router';

// CSS
import './css/VisualizarVeiculosPage.css'
import '../global/global.css';

// Interface para especificar o formato dos dados do veículo
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
    const navigate = useNavigate();

    const handleAlugarClick = () => {
        navigate('/login');
    }

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                const response = await getVeiculosDisponiveis();
                setCarros(response);
            } catch (error) {
                console.error('Erro ao buscar carros:', error);
            }
        };

        fetchCarros(); // Chama a função fetchCarros inicialmente

        const interval = setInterval(fetchCarros, 1000); // Atualiza os carros a cada 1 segundo

        return () => {
            clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
        };
    }, []);

    return (
        <div className="principal-container-visualizar">
            <h3 className="animar-h3">Bem-Vindo ao iCar</h3>
            <div className="carros-container">
                {carros.map((carro) => (
                    <div key={carro.placa} className="carro-card">
                        <div className="carro-info">
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
                            <button type="button" onClick={() => handleAlugarClick()}>
                                Alugar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Principal;
