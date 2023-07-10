import React, { useState } from 'react';
import { criarVeiculo } from '../services/VeiculoServices';
import './css/CadastrarVeiculoPage.css';

const CadastroVeiculo: React.FC = () => {
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState<number | ''>('');
    const [combustivel, setCombustivel] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [cor, setCor] = useState('');
    const [valorDiaria, setValorDiaria] = useState(0.0);
    const [alerta, setAlerta] = useState<{ tipo: 'success' | 'error'; mensagem: string } | null>(null);

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            // Realizar as validações antes de criar o veículo
            if (placa.length !== 7) {
                setAlerta({ tipo: 'error', mensagem: 'A placa deve ter exatamente 7 caracteres.' });
                return;
            }

            if (modelo.length < 2 || modelo.length > 100) {
                setAlerta({ tipo: 'error', mensagem: 'O modelo deve ter entre 2 e 100 caracteres.' });
                return;
            }

            if (marca.length < 2 || marca.length > 100) {
                setAlerta({ tipo: 'error', mensagem: 'A marca deve ter entre 2 e 100 caracteres.' });
                return;
            }

            if (ano !== '' && (ano < 2021 || ano > 2024)) {
                setAlerta({ tipo: 'error', mensagem: 'O ano deve estar entre 2021 e 2024.' });
                return;
            }

            if (valorDiaria < 90.00) {
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
            setValorDiaria(0.0);

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

    return (
        <form className="cadastro-veiculo" onSubmit={handleFormSubmit}>
            {renderAlerta()}
            <h2>Cadastro de Veículo</h2>
            <div className="form-group">
                <label>
                    Placa:
                    <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
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
                    <input type="number" step="10.00" value={valorDiaria} onChange={(e) => setValorDiaria(Number(e.target.value))} />
                </label>
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default CadastroVeiculo;
