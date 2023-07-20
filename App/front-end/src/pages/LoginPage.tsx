import React, { useState } from 'react';
import { useNavigate } from 'react-router';

// services
import { login } from '../services/LoginServices';

// CSS
import './css/Form.css';
import '../global/global.css';

//validação
import {ehValidoCpf, ehValidoSenha } from './CadastrarPessoaPage';

//TSX
const Login: React.FC = () => {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [alerta, setAlerta] = useState<{ tipo: 'success' | 'error' | 'warning'; mensagem: string } | null>(null);

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {

            if (!ehValidoCpf(cpf)) {
                setAlerta({ tipo: 'error', mensagem: 'O CPF deve conter apenas números e exatamente 11 caracteres.' });
                return;
            }

            if (!ehValidoSenha(senha)) {
                setAlerta({ tipo: 'error', mensagem: 'A senha deve ter até 200 caracteres.' });
                return;
            }

            const dadosPessoa = await login(cpf, senha);

            localStorage.setItem('dadosPessoa', JSON.stringify(dadosPessoa)); // Armazena todos os dados do dadosPessoa no localStorage

            if (dadosPessoa.tipo === 'Cliente') {
                setAlerta({ tipo: 'success', mensagem: 'Logado' });
                navigate('/');
            } else if (dadosPessoa.tipo === 'Funcionário'){
                setAlerta({ tipo: 'success', mensagem: 'Logado' });
                navigate('/visualizarVeiculos');
            }

            setCpf('');
            setSenha('');

        } catch (error) {
            console.error(`Erro ao logar-se:`, error);
            setAlerta({ tipo: 'error', mensagem: `Erro ao logar-se: ${error}` });
        }
    };

    const renderAlerta = () => {
        if (!alerta) return null;

        return <div className={`alert alert-${alerta.tipo}`}>{alerta.mensagem}</div>;
    };

    return (
        <form className="form-container" onSubmit={handleFormSubmit}>
            {renderAlerta()}
            <h2>LOGIN</h2>
            <div className="form-group">
                <label>
                    CPF:
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Senha:
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </label>
            </div>
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
