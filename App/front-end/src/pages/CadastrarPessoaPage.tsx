import React, { useState } from 'react';

// services
import { criarCliente, criarFuncionario } from '../services/PessoaServices';

// CSS
import './css/Form.css';
import '../global/global.css';

//Validação
export const ehValidoNome = (nome: string) => {
    if (nome.length < 2 || nome.length > 200) {
        return false;
    }

    return true;
};

export const ehValidoCpf = (cpf: string) => {

    const regex = /^\d+$/;
    if (!regex.test(cpf)) {
        return false;
    }

    if (cpf.length !== 11) {
        return false;
    }
    return true;
};

export const ehValidoTelefone = (telefone: string) => {
    if (telefone.length !== 12) {
        return false;
    }

    return true;
};

export const ehValidoFuncao = (funcao: string) => {
    const funcoesValidas = [
        'Atendente',
        'Jurídico',
        'RH',
    ]

    if (!funcoesValidas.includes(funcao)) {
        return false;
    }

    return true;
};

export const ehValidoNascimento = (nascimento: string) => {
    // Verificar se é uma string no formato 'yyyy-mm-dd'
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(nascimento)) {
        return false;
    }

    // Verificar se é uma data válida
    const data = new Date(nascimento);
    if (isNaN(data.getTime())) {
        return false;
    }

    return true;
};

export const ehValidoEndereco = (endereco: string) => {
    if (endereco.length < 3 || endereco.length > 200) {
        return false;
    }

    return true;
};

export const ehValidoCnh = (cnh: string) => {
    const regex = /^\d+$/;
    if (!regex.test(cnh)) {
        return false;
    }

    if (cnh.length !== 11) {
        return false;
    }

    return true;
};

export const ehValidoSenha = (senha: string) => {
    if (senha.length > 200) {
        return false;
    }

    return true;
};

//TSX
const CadastrarPessoa: React.FC = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [funcao, setFuncao] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cnh, setCnh] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoPessoa, setTipoPessoa] = useState('Cliente');
    const [alerta, setAlerta] = useState<{ tipo: 'success' | 'error' | 'warning'; mensagem: string } | null>(null);

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            // Realizar as validações antes de criar o veículo
            if (!ehValidoNome(nome)) {
                setAlerta({ tipo: 'error', mensagem: 'O nome deve ter entre 2 a 200 caracteres' });
                return;
            }

            if (!ehValidoCpf(cpf)) {
                setAlerta({ tipo: 'error', mensagem: 'O CPF deve conter apenas números e exatamente 11 caracteres.' });
                return;
            }

            if (!ehValidoTelefone(telefone)) {
                setAlerta({ tipo: 'error', mensagem: 'o telefone deve ter exatamente 12 caracteres.' });
                return;
            }

            if (!ehValidoEndereco(endereco)) {
                setAlerta({ tipo: 'error', mensagem: 'O endereco deve ter entre 3 a 200 caracteres' });
                return;
            }

            if (!ehValidoNascimento(nascimento)) {
                setAlerta({ tipo: 'error', mensagem: 'Data de nascimento inválida - O formato do nascimento deve ser "yyyy-mm-dd".' });
                return;
            }

            if (!ehValidoSenha(senha)) {
                setAlerta({ tipo: 'error', mensagem: 'A senha deve ter até 200 caracteres.' });
                return;
            }

            if (tipoPessoa === "Cliente") {
                if (!ehValidoCnh(cnh)) {
                    setAlerta({ tipo: 'error', mensagem: 'A CNH deve conter apenas números e exatamente 11 caracteres.' });
                    return;
                }

                await criarCliente({
                    nome,
                    cpf,
                    nascimento,
                    endereco,
                    telefone,
                    cnh,
                    senha,
                });

            } else if (tipoPessoa === "Funcionário") {
                if (!ehValidoFuncao(funcao)) {
                    setAlerta({ tipo: 'error', mensagem: `A função: ${funcao} não é válida, ela precisa ser Atendente, Jurídico ou RH` });
                    return;
                }

                await criarFuncionario({
                    nome,
                    cpf,
                    nascimento,
                    endereco,
                    telefone,
                    funcao,
                    senha,
                });

            }

            setNome('');
            setCpf('');
            setNascimento('');
            setEndereco('');
            setTelefone('');
            setCnh('');
            setFuncao('');
            setSenha('');

            setAlerta({ tipo: 'success', mensagem: `${tipoPessoa} cadastrado com sucesso!` });
        } catch (error) {
            console.error(`Erro ao cadastrar ${tipoPessoa}:`, error);
            setAlerta({ tipo: 'error', mensagem: `Ocorreu um erro ao cadastrar ${tipoPessoa}. Por favor, tente novamente.` });
        }
    };

    const handleNascimentoChange = (event: any) => {
        const inputDate = new Date(event.target.value);
        const year = inputDate.getFullYear();
        const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
        const day = inputDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setNascimento(formattedDate);
    };

    const renderAlerta = () => {
        if (!alerta) return null;

        return <div className={`alert alert-${alerta.tipo}`}>{alerta.mensagem}</div>;
    };

    return (
        <form className="form-container" onSubmit={handleFormSubmit}>
            {renderAlerta()}
            <h2>CADASTRAR-SE</h2>
            <div className="form-group">
                <label>
                    Tipo de Pessoa:
                    <select value={tipoPessoa} onChange={(e) => setTipoPessoa(e.target.value)}>
                        <option value="Cliente">Cliente</option>
                        <option value="Funcionário">Funcionário</option>
                    </select>
                </label>
            </div>
            <div className="form-group">
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    CPF:
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Telefone:
                    <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Nascimento:
                    <input type="Date" value={nascimento} onChange={handleNascimentoChange} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Endereço:
                    <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                </label>
            </div>
            {tipoPessoa === 'Cliente' && (
                <div className="form-group">
                    <label>
                        CNH:
                        <input type="text" value={cnh} onChange={(e) => setCnh(e.target.value)} />
                    </label>
                </div>
            )}
            {tipoPessoa === 'Funcionário' && (
                <div className="form-group">
                    <label>
                        Função:
                        <input type="text" value={funcao} onChange={(e) => setFuncao(e.target.value)} />
                    </label>
                </div>
            )}
            <div className="form-group">
                <label>
                    Senha:
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </label>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default CadastrarPessoa;
