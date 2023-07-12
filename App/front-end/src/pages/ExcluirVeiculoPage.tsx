import React from 'react';
import { deletarVeiculo } from '../services/VeiculoServices';

//css
import '../global/global.css';


const ExcluirVeiculo: React.FC = () => {
    const [placa, setPlaca] = React.useState('');

    const handleExcluir = async () => {
        try {

            if(placa.length !== 7) {
                throw new Error('A placa deve conter 7 caracteres ');
            }
            await deletarVeiculo(placa);
            console.log('Veículo excluído com sucesso!');

        } catch (error) {
            console.error('Ocorreu um erro ao excluir o veículo:', error);

        }
    };

    return (
        <div>
            <h2>Excluir Veículo</h2>
            <label>
                Placa do Veículo:
                <input
                    type="text"
                    value={placa}
                    onChange={(event) => setPlaca(event.target.value)}
                />
            </label>
            <button onClick={handleExcluir}>Excluir</button>
        </div>
    );
};

export default ExcluirVeiculo;
