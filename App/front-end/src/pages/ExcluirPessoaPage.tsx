import React, { useState } from 'react';

//services
import { deletarPessoa, getPessoaPorCpf } from '../services/PessoaServices';

// css
import '../global/global.css';
import './css/ExcluirVeiculoPage.css';

const ExcluirPessoa: React.FC = () => {
    const [cpf, setCpf] = useState('');
    const [alerta, setAlerta] = useState<{ tipo: 'success' | 'error' | 'warning'; mensagem: string } | null>(null);

    const handleExcluir = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (cpf.length !== 11) {
                setAlerta({ tipo: 'error', mensagem: 'O cpf deve ter exatamente 11 caracteres.' });
                return
            }

            await deletarPessoa(cpf);
            setAlerta({ tipo: 'success', mensagem: 'Cadastro excluído com sucesso!' });

            setCpf("");
        } catch (error) {
            console.error('Ocorreu um erro ao excluir o cadastro', error);
            setAlerta({ tipo: 'error', mensagem: 'Ocorreu um erro ao excluir o cadastro!' });
        }
    };

    const verificarExistenciaPessoa = async (cpf: string) => {
        try {
            const pessoa = await getPessoaPorCpf(cpf);

            if (pessoa) {
                setCpf(pessoa.cpf);
                
                if(pessoa.cpf === null){
                    setAlerta({ tipo: 'error', mensagem: 'Cadastro não encontrado' });
                }
            } else {
                setAlerta({ tipo: 'success', mensagem: 'Cadastro encontrado! '});
            }
        } catch (error) {
            setAlerta({ tipo: 'error', mensagem: 'Erro ao verificar a existência do cadastro!' });
            console.error('Erro ao verificar a existência do cadastro!', error);
        }
    };

    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCpf = event.target.value;
        setCpf(newCpf);

        if (newCpf === '') {
            setAlerta({ tipo: 'warning', mensagem: 'Insira um CPF válido' })
        } else {
            verificarExistenciaPessoa(newCpf);
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
                <h2>EXCLUIR CADASTRO</h2>
                <form onSubmit={handleExcluir} >    
                    <label>
                        CPF:
                        <input
                            type="text"
                            value={cpf}
                            onChange={handleCpfChange}
                        />
                    </label>
                    <button type="submit">Excluir</button>
                </form>
            </div>
        </div>
    );
};

export default ExcluirPessoa;
