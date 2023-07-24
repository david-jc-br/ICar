import React, { useEffect, useState } from 'react';
import { getAlugueis } from '../services/AluguelServices';

// Css 
import './css/VisualizarVeiculosPage.css'
import '../global/global.css';
import './css/VisualizarAlugueisPage.css';


interface Aluguel {
    id: number,
    dataLocacao: string,
    dataDevolucao: string,
    valor: number,
    cpfCliente: string,
    placaVeiculo: string
}

const VisualizarAlugueis: React.FC = () => {
    const [alugueis, setAlugueis] = useState<Aluguel[]>([]);

    useEffect(() => {
        const fetchAlugueis = async () => {
            try {
                const response = await getAlugueis();
                setAlugueis(response);
            } catch (error) {
                console.error('Erro ao buscar alugueis', error);
            }
        };

        fetchAlugueis(); // Chama a função fetchAlugueis inicialmente

        const interval = setInterval(fetchAlugueis, 1000); // Atualiza os alugueis a cada 1 segundo

        return () => {
            clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
        };
    }, []);



    return (
        <div className="principal-container-visualizar">
            <h2>ALUGUÉIS</h2>
            <div className="aluguel-container">
                {alugueis.map((aluguel) => (
                    <div key={aluguel.id} className="aluguel-card">
                        <div className="aluguel-info">
                            <div className="aluguel-info-item-id">
                                <span className="aluguel-info-label">ID: </span>

                                <span className="aluguel-info">{aluguel.id}</span>
                            </div>
                            <div className="aluguel-info-item">
                                <span className="aluguel-info-label">Data Locação: </span>

                                <span className="aluguel-info">{aluguel.dataLocacao}</span>
                            </div>
                            <div className="aluguel-info-item">
                                <span className="aluguel-info-label">Data Devolução: </span>
                                <span className="aluguel-info">{aluguel.dataDevolucao}</span>
                            </div>
                            <div className="aluguel-info-item">
                                <span className="aluguel-info-label">Valor: </span>
                                <span className="aluguel-info">{aluguel.valor}</span>
                            </div>
                            <div className="aluguel-info-item">
                                <span className="aluguel-info-label">CPF Cliente: </span>
                                <span className="aluguel-info">{aluguel.cpfCliente}</span>
                            </div>
                            <div className="aluguel-info-item">
                                <span className="aluguel-info-label">Placa do Veículo: </span>

                                <span className="aluguel-info">{aluguel.placaVeiculo}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisualizarAlugueis;
