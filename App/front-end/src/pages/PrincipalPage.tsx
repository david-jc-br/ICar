import React, { useEffect, useState } from 'react';
import { getAllVeiculos } from '../services/VeiculoServices';

// CSS
import './css/PrincipalPage.css';

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

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                const response = await getAllVeiculos();
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
        <div>
            <div className="carros-container">
                {carros.map((carro) => (
                    <div key={carro.placa} className="carro-card">
                        <div className="carro-info">
                            <div>{carro.modelo}</div>
                            <p>{carro.marca}</p>
                        </div>
                        <p>Ano: {carro.ano}</p>
                        <p>Combustível: {carro.combustivel}</p>
                        <p>Disponibilidade: {carro.disponibilidade}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Principal;
