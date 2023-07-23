import React, { useEffect, useState } from 'react';
import { getPessoaPorCpf } from '../services/PessoaServices';

// css
import './css/Form.css';
import '../global/global.css';

const Perfil: React.FC = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [funcao, setFuncao] = useState('Atendente');
    const [endereco, setEndereco] = useState('');
    const [cnh, setCnh] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoPessoa, setTipoPessoa] = useState('Cliente');
    const [alerta, setAlerta] = useState<{ tipo: 'success' | 'error' | 'warning'; mensagem: string } | null>(null);


    const verificarExistenciaPessoa = async (cpf: string) => {
        try {
            const pessoa = await getPessoaPorCpf(cpf);
            if (pessoa) {
                setNome(pessoa.nome);
                setCpf(pessoa.cpf);
                setTelefone(pessoa.telefone);
                setNascimento(pessoa.nascimento);
                setFuncao(pessoa.funcao);
                setCnh(pessoa.cnh);
                setTipoPessoa(pessoa.tipoPessoa);

                setAlerta({ tipo: 'success', mensagem: 'Cadastro Encontrado!' })

            } else {
                setNome('');
                setCpf('');
                setTelefone('');
                setNascimento('');
                setFuncao('');
                setCnh('');
                setTipoPessoa('');
                setAlerta({ tipo: 'error', mensagem: 'Cadastro não encontrado!' });
            }
        } catch (error) {
            console.error('Erro ao verificar a existência do cadastro:', error);
        }
    };

    const renderAlerta = () => {
        if (!alerta) return null;

        return <div className={`alert alert-${alerta.tipo}`}>{alerta.mensagem}</div>;
    };

    return (
        <form className="form-container">
            {renderAlerta()} 
            
            <h2>PERFIL </h2>
            <div className="form-group">
                <label>
                    Nome:
                    <input type="text" value={nome}/>
                </label>
            </div>

            <div className="form-group">
                <label>
                    CPF:
                    <input type="text" value={cpf}/>
                </label>
            </div>

            <div className="form-group">
                <label>
                    Telefone:
                    <input type="text" value={telefone}/>
                </label>
            </div>

            <div className="form-group">
                <label>
                    Nascimento:
                    <input type="text" value={nascimento}/>
                </label>
            </div>

            <div className="form-group">
                <label>
                    Endereço:
                    <input type="text" value={endereco}/>
                </label>
            </div>

            {tipoPessoa === 'Cliente' && (
                <div className="form-group">
                    <label>
                        CNH:
                        <input type="text" value={cnh}/>
                    </label>
                </div>
            )}
            {tipoPessoa === 'Funcionário' && (
                <div className="form-group">
                    <label>
                        Função:
                        <input type="text" value={funcao}/>
                    </label>
                </div>
            )}

        </form>
    );
};

export default Perfil;
