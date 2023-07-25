import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getVeiculoPorPlaca } from '../services/VeiculoServices';
import { alugar } from '../services/AluguelServices';
import { ehValidoNascimento } from './CadastrarPessoaPage';

const Alugar: React.FC = () => {
    const params = useParams<{ cpf: any, placa: any }>();
    const { placa } = params;
    const { cpf } = params;
    const navigate = useNavigate();

    const [veiculo, setVeiculo] = useState<Veiculo | null>(null);
    const [qtdeDias, setQtdeDias] = useState<number>(1);
    const [dataLocacao, setDataLocacao] = useState<string>('');
    const [dataDevolucao, setDataDevolucao] = useState<string>('');
    const [valorTotal, setValorTotal] = useState<number>(0);
    const [aluguelConfirmado, setAluguelConfirmado] = useState<boolean>(false);
    const [alerta, setAlerta] = useState<{ tipo: 'success' | 'error' | 'warning'; mensagem: string } | null>(null);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getVeiculoPorPlaca(placa);
                setVeiculo(data);
            } catch (error) {
                console.error('Erro ao obter o veículo:', error);
            }
        };
        fetchData();
    }, [placa]);

    function sleep(ms:any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        if (dataLocacao && qtdeDias > 0) {
            const dataLocacaoObj = new Date(dataLocacao);
            const dataDevolucaoObj = new Date(dataLocacaoObj.getTime() + qtdeDias * 24 * 60 * 60 * 1000);
            const formattedDataDevolucao = dataDevolucaoObj.toISOString().split('T')[0];
            setDataDevolucao(formattedDataDevolucao);
        }
    }, [dataLocacao, qtdeDias]);

    useEffect(() => {
        const valorTotalCalculado = veiculo ? veiculo.valorDiaria * qtdeDias : 0;
        setValorTotal(valorTotalCalculado);
    }, [veiculo, qtdeDias]);

    const handleConfirmar = async (event: React.FormEvent) => {
        event.preventDefault(); // Evita que a página seja recarregada ao enviar o formulário
        if (!ehValidoNascimento(dataLocacao)) {
            setAlerta({ tipo: 'error', mensagem: 'Data de locação inválida - O formato deve ser "yyyy-mm-dd".' });
            return;
        }


        if (veiculo && veiculo.placa && dataLocacao && dataDevolucao && valorTotal) {
            console.log(cpf)

            if (cpf) {
                try {
                    const aluguelData = {
                        dataLocacao: dataLocacao,
                        dataDevolucao: dataDevolucao,
                        valor: valorTotal,
                        cpfCliente: cpf,
                        placaVeiculo: veiculo.placa,
                    };

                    console.log("Dados do aluguel:", aluguelData);

                    await alugar(aluguelData);

                    console.log("Aluguel confirmado com sucesso!");

                    setAluguelConfirmado(true);

                    setAlerta({ tipo: 'success', mensagem: 'Aluguel confirmado com sucesso!' });

                    setDataLocacao("");
                    setDataDevolucao("");
                    setQtdeDias(1);
                    setValorTotal(0)
                    await sleep(2500);
                    navigate(-1);
                } catch (error) {
                    console.error('Erro ao confirmar o aluguel:', error);

                    // Exibir mensagem de erro
                    setAlerta({ tipo: 'error', mensagem: 'Ocorreu um erro ao confirmar o aluguel. Tente novamente mais tarde.' });
                }
            } else {
                console.error('CPF do cliente não encontrado no localStorage');
            }
        }
    };

    const renderAlerta = () => {
        if (!alerta) return null;

        return <div className={`alert alert-${alerta.tipo}`}>{alerta.mensagem}</div>;
    };

    return (
        <form className="form-container" onSubmit={handleConfirmar}>
            {renderAlerta()}
            <h2>Alugar</h2>
            <div className="form-group">
                <label>
                    Placa:
                    <input type="text" value={placa} readOnly />
                </label>
            </div>
            {veiculo && (
                <div>
                    <div className="form-group">
                        <label>
                            Modelo:
                            <input type="text" value={veiculo.modelo} readOnly />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Marca:
                            <input type="text" value={veiculo.marca} readOnly />
                        </label>
                    </div>
                </div>
            )}
            <div className="form-group">
                <label>
                    Data locação:
                    <input type="date" value={dataLocacao} onChange={(e) => setDataLocacao(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Data devolucao:
                    <input type="date" value={dataDevolucao} readOnly />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Quantidade de Dias:
                    <input type="number" max={90} min={1} step="1" value={qtdeDias} onChange={(e) => setQtdeDias(Number(e.target.value))} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Valor Total:
                    <input type="text" value={"R$" + valorTotal.toFixed(2)} readOnly />
                </label>
            </div>
            <div className="form-group">
                <button type="submit">Confirmar</button>
            </div>
        </form>
    );
};

export default Alugar;
