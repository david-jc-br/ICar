import React, { useState } from 'react';
import { getVeiculoPorPlaca, atualizarVeiculo } from '../services/VeiculoServices';
import './css/AtualizarVeiculoPage.css';

const AtualizarVeiculo: React.FC = () => {
    const [placa, setPlaca] = React.useState('');
    const [alerta, setAlerta] = useState<{ tipo: 'success' | 'error'; mensagem: string } | null>(null);

    const handleExcluir = async () => {
        try {

            if(placa.length !== 7) {
                throw new Error('A placa deve conter 7 caracteres ');
            }
            
            await getVeiculoPorPlaca(placa);
                //setAlerta({ tipo: 'error', mensagem: 'Veículo não encontrado!' });
            console.log('Veículo não encontrado no banco de dados!');       

            await atualizarVeiculo(placa);
            setAlerta({ tipo: 'error', mensagem: 'Veículo excluído com sucesso!' });
            console.log('Veículo excluído com sucesso!');

        } catch (error) {
            setAlerta({ tipo: 'error', mensagem: 'A placa deve ter exatamente 7 caracteres.' });
            console.error('Ocorreu um erro ao atualizar o veículo:');

        }
    };

    const renderAlerta = () => {
        if (!alerta) return null;

        return <div className={`alert alert-${alerta.tipo}`}>{alerta.mensagem}</div>;
    };

    return (
        <div>
            <h2>Atualizar Veículo</h2>
            <label className='label-excluir'>
                {renderAlerta()}
                Placa do Veículo:
                <input
                    type="text"
                    value={placa}
                    onChange={(event) => setPlaca(event.target.value)}
                />
                <button onClick={handleExcluir}>Atualizar</button>
            </label>
            
        </div>
    );
};

export default AtualizarVeiculo;
