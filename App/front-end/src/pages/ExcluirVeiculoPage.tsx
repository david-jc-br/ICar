import React, { useState } from 'react';

//services
import { deletarVeiculo, getVeiculoPorPlaca } from '../services/VeiculoServices';

// css
import '../global/global.css';
import './css/ExcluirVeiculoPage.css';

const ExcluirVeiculo: React.FC = () => {
    const [placa, setPlaca] = React.useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [alerta, setAlerta] = useState<{ tipo: 'success' | 'error' | 'warning'; mensagem: string } | null>(null);

    const handleExcluir = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (placa.length !== 7) {
                setAlerta({ tipo: 'error', mensagem: 'A placa deve ter exatamente 7 caracteres.' });
                return
            }

            if(disponibilidade !== 'Disponivel'){
                setAlerta({ tipo: 'error', mensagem: 'O veículo "'+ marca + ' ' + modelo + '" não pode ser excluído pois está com diponibilidade: ' + disponibilidade });
                    return
            }

            await deletarVeiculo(placa);
            setAlerta({ tipo: 'success', mensagem: 'Veículo excluído com sucesso!' });
        } catch (error) {
            console.error('Ocorreu um erro ao excluir o veículo', error);
            setAlerta({ tipo: 'error', mensagem: 'Ocorreu um erro ao excluir o veículo!' });
        }
    };

    const verificarExistenciaVeiculo = async (placa: string) => {
        try {
            const veiculo = await getVeiculoPorPlaca(placa);

            if (veiculo) {
                setPlaca(veiculo.placa);
                setModelo(veiculo.modelo);
                setMarca(veiculo.marca);
                setDisponibilidade(veiculo.disponibilidade);


                if(veiculo.disponibilidade === 'Alugado' || veiculo.disponibilidade === 'Em Manutenção'){
                    setAlerta({ tipo: 'error', mensagem: 'O veículo "'+ veiculo.marca + ' ' + veiculo.modelo + '" não pode ser excluído pois está com diponibilidade: ' + veiculo.disponibilidade });
                    return
                } else {
                    setAlerta({ tipo: 'success', mensagem: 'Veículo "' + veiculo.marca + ' ' + veiculo.modelo + '" Encontrado! '});
                }
            } else {
                setDisponibilidade('');
                setAlerta({ tipo: 'error', mensagem: 'Veículo não encontrado' });

            }
        } catch (error) {
            setAlerta({ tipo: 'error', mensagem: 'Erro ao verificar a existência do veículo:' });
            console.error('Erro ao verificar a existência do veículo:', error);
        }
    };

    const handlePlacaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPlaca = event.target.value;
        setPlaca(newPlaca);

        if (newPlaca === '') {
            setAlerta({ tipo: 'warning', mensagem: 'Insira uma placa Válida' })
        } else {
            verificarExistenciaVeiculo(newPlaca);
        }

    };

    const renderAlerta = () => {
        if (!alerta) return null;

        return <div className={`alert alert-${alerta.tipo}`}>{alerta.mensagem}</div>;
    };

    return (
        <div className="excluir-veiculo-container">
            <div className="excluir-veiculo-box">
                {renderAlerta()}
                <h2>EXCLUIR VEÍCULO</h2>
                <form onSubmit={handleExcluir} >
                    <label>
                        Placa:
                        <input
                            type="text"
                            value={placa}
                            onChange={handlePlacaChange}
                        />
                    </label>
                    <button type="submit">Excluir</button>
                </form>
            </div>
        </div>
    );
};

export default ExcluirVeiculo;
