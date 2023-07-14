import React, { useState } from 'react';
import { criarVeiculo, getVeiculoPorPlaca } from '../services/VeiculoServices';

// CSS
import './css/Form.css';
import '../global/global.css';

export const ehValidoPlaca = (placa: string) => {
    if (placa.length !== 7) {
        return false;
    }
    return true;
};

export const ehValidoModelo = (modelo: string) => {
    if (modelo.length < 2 || modelo.length > 100) {
        return false;
    }
    return true;
};

export const ehValidaMarca = (marca: string) => {
    if (marca.length < 2 || marca.length > 100) {
        return false;
    }
    return true;
};

export const ehValidoAno = (ano: number | '') => {
    if (ano !== '' && (ano < 2021 || ano > 2024)) {
        return false;
    }
    return true;
};

export const ehValidoValorDiaria = (valorDiaria: number) => {
    if (valorDiaria < 90.0) {
        return false;
    }
    return true;
};

const CadastroVeiculo: React.FC = () => {
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState<number | ''>('');
    const [combustivel, setCombustivel] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [cor, setCor] = useState('');
    const [valorDiaria, setValorDiaria] = useState(90.0);
    const [alerta, setAlerta] = useState<{ tipo: 'success' | 'error' | 'warning'; mensagem: string } | null>(null);

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            // Realizar as validações antes de criar o veículo
            if (!ehValidoPlaca(placa)) {
                setAlerta({ tipo: 'error', mensagem: 'A placa deve ter exatamente 7 caracteres.' });
                return;
            }

            if (!ehValidoModelo(modelo)) {
                setAlerta({ tipo: 'error', mensagem: 'O modelo deve ter entre 2 e 100 caracteres.' });
                return;
            }

            if (!ehValidaMarca(marca)) {
                setAlerta({ tipo: 'error', mensagem: 'A marca deve ter entre 2 e 100 caracteres.' });
                return;
            }

            if (!ehValidoAno(ano)) {
                setAlerta({ tipo: 'error', mensagem: 'O ano deve estar entre 2022 e 2024.' });
                return;
            }

            if (!ehValidoValorDiaria(valorDiaria)) {
                setAlerta({ tipo: 'error', mensagem: 'O valor da diária deve ser igual ou superior a 90.00 reais ' });
                return;
            }

            await criarVeiculo({
                placa,
                modelo,
                marca,
                ano,
                combustivel,
                disponibilidade,
                cor,
                valorDiaria,
            });

            // Limpar os campos após o cadastro bem-sucedido
            setPlaca('');
            setModelo('');
            setMarca('');
            setAno('');
            setCombustivel('');
            setDisponibilidade('');
            setCor('');
            setValorDiaria(90.0);

            setAlerta({ tipo: 'success', mensagem: 'Veículo cadastrado com sucesso!' });
        } catch (error) {
            console.error('Erro ao cadastrar veículo:', error);
            setAlerta({ tipo: 'error', mensagem: 'Ocorreu um erro ao cadastrar o veículo. Por favor, tente novamente.' });
        }
    };

    const renderAlerta = () => {
        if (!alerta) return null;

        return <div className={`alert alert-${alerta.tipo}`}>{alerta.mensagem}</div>;
    };

    const verificarExistenciaVeiculo = async (placa: string) => {
        try {
            const veiculo = await getVeiculoPorPlaca(placa);

            if (veiculo) {
                setModelo(veiculo.modelo);
                setMarca(veiculo.marca);
                setAno(veiculo.ano);
                setCombustivel(veiculo.combustivel);
                setDisponibilidade(veiculo.disponibilidade);
                setCor(veiculo.cor);
                setValorDiaria(veiculo.valorDiaria);
                setAlerta({ tipo: 'warning', mensagem: 'Veículo já cadastrado!' });
            }else {
                setModelo('');
                setMarca('');
                setAno('');
                setCombustivel('');
                setDisponibilidade('');
                setCor('');
                setValorDiaria(90.0);

            }
        } catch (error) {
            console.error('Erro ao verificar a existência do veículo:', error);
        }
    };

    const handlePlacaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPlaca = event.target.value;
        setPlaca(newPlaca);

        if (newPlaca === '') {
            setAlerta({ tipo: 'error', mensagem: 'Insira uma placa Válida' })
        }else {
            verificarExistenciaVeiculo(newPlaca);
        }

    };

    return (
        <form className="form-container" onSubmit={handleFormSubmit}>
            {renderAlerta()}
            <h2>CADASTRAR VEÍCULO</h2>
            <div className="form-group">
                <label>
                    Placa:
                    <input type="text" value={placa} onChange={handlePlacaChange} />
                </label>
            </div>

            <div className="form-group">
                <label>
                    Modelo:
                    <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                </label>
            </div>

            <div className="form-group">
                <label>
                    Marca:
                    <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                </label>
            </div>

            <div className="form-group">
                <label>
                    Ano:
                    <select value={ano} onChange={(e) => setAno(Number(e.target.value))}>
                        <option value="">Selecione</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </label>
            </div>

            <div className="form-group">
                <label>
                    Combustível:
                    <select value={combustivel} onChange={(e) => setCombustivel(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Álcool">Álcool</option>
                        <option value="Gasolina">Gasolina</option>
                        <option value="Flex">Flex</option>
                        <option value="Elétrico">Elétrico</option>
                    </select>
                </label>
            </div>

            <div className="form-group">
                <label>
                    Disponibilidade:
                    <select value={disponibilidade} onChange={(e) => setDisponibilidade(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Disponível">Disponível</option>
                        <option value="Em Manutenção">Em Manutenção</option>
                        <option value="Alugado">Alugado</option>
                    </select>
                </label>
            </div>

            <div className="form-group">
                <label>
                    Cor:
                    <select value={cor} onChange={(e) => setCor(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Branco">Branco</option>
                        <option value="Preto">Preto</option>
                        <option value="Vermelho">Vermelho</option>
                        <option value="Azul">Azul</option>
                        <option value="Prata">Prata</option>
                    </select>
                </label>
            </div>

            <div className="form-group">
                <label>
                    Valor da Diária:
                    <input type="number" step="5.00" value={valorDiaria} onChange={(e) => setValorDiaria(Number(e.target.value))} />
                </label>
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default CadastroVeiculo;
