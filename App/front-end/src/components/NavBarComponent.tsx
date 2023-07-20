import { Outlet, useLocation, useNavigate } from "react-router-dom";

// icons
import {
    BsFillPersonFill,
    BsKey,
    BsPersonPlus
} from "react-icons/bs";

import {
    FaEdit,
    FaHome,
    FaList,
    FaPlus,
    FaTrash
} from 'react-icons/fa';

// style
import './css/NavBarComponent.css'

// Logo
import icarLogo from '../img/icar-logo.png'
import { useState } from "react";

const NavBar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleCadastrarSeClick = () => {
        navigate('/cadastrarPessoa');
    };

    const handlePerfilClick = () => {
        navigate('/perfil');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleVisualizarAlugueisClick = () => {
        navigate('vizualizarAlugueis');
    }

    const handlePaginaInicalClick = () => {
        navigate('./');
    };


    const handleGerenciarVeiculosClick = () => {
        setMenuOpen(!menuOpen);
    };

    const Logo: React.FC = () => {
        return (
            <div className="logo">
                <img src={icarLogo} alt="icar-Logo" />
            </div>
        );
    };

    const PerfilButton: React.FC = () => {
        return (
            <li>
                <button className="azul" onClick={handlePerfilClick}>
                    <BsFillPersonFill className="icon" />
                    <span className="label">Perfil</span>
                </button>
            </li>
        );
    };

    const CadastrarSeButton: React.FC = () => {
        return (
            <li>
                <button className="azul" onClick={handleCadastrarSeClick}>
                    <BsPersonPlus className="icon" />
                    <span className="label">Cadastrar-se</span>
                </button>
            </li>
        );
    };

    const LoginButton: React.FC = () => {
        return (
            <li>
                <button className="verde" onClick={handleLoginClick}>
                    <BsKey className="icon" />
                    <span className="label">Login</span>
                </button>
            </li>
        );
    };

    const VisualizarAlugueisButton: React.FC = () => {
        return (
            <li>
                <button className="verde" onClick={handleVisualizarAlugueisClick}>
                    <FaList className="icon" />
                    <span className="label">Visualizar Aluguéis</span>
                </button>
            </li>
        );
    };

    const PaginaInicialButton: React.FC = () => {
        return (
            <li>
                <button className="azul" onClick={handlePaginaInicalClick}>
                    <FaHome className="icon" />
                    <span className="label">Página Inical</span>
                </button>
            </li>
        );
    };

    const GerenciarVeiculosButton: React.FC = () => {
        return (
            <li>
                <button className="preto" onClick={handleGerenciarVeiculosClick}>
                    Gerenciar Veículos
                </button>
                {menuOpen && (
                    <ul >
                        <li>
                            <button className="preto" onClick={() => navigate('/cadastrarVeiculo')}>
                                <FaPlus className="icon" />
                                <span className="label">Cadastrar</span>
                            </button>
                        </li>
                        <li>
                            <button className="preto" onClick={() => navigate('/excluirVeiculo')}>
                                <FaTrash className="icon" />
                                <span className="label">Excluir</span>
                            </button>
                        </li>
                        <li>
                            <button className="preto" onClick={() => navigate('/visualizarVeiculos')}>
                            <FaList className="icon" />
                                <span className="label">Visualizar</span>   
                            </button>
                        </li>
                        <li>
                            <button className="preto" onClick={() => navigate('/atualizarVeiculo')}>
                            <FaEdit className="icon" />
                                <span className="label">Atualizar</span>
                            </button>
                        </li>
                    </ul>
                )}
            </li>
        );
    };


    const renderNavBarContent = () => {
        if (location.pathname === '/') {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <Logo />
                            <div className="nav-buttons">
                                <ul>
                                    <CadastrarSeButton />
                                    <LoginButton />
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        } else if (
            location.pathname === '/cadastrarVeiculo' ||
            location.pathname === '/atualizarVeiculo' ||
            location.pathname === '/excluirVeiculo' ||
            location.pathname === '/visualizarVeiculos'
        ) {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <Logo />
                            <div className="nav-buttons">
                                <ul>
                                    <PerfilButton />
                                    <VisualizarAlugueisButton/>
                                    <GerenciarVeiculosButton />
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        } else if (location.pathname === '/cadastrarPessoa') {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <Logo />
                            <div className="nav-buttons">
                                <ul>
                                    <PaginaInicialButton/>
                                    <LoginButton />
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        }
    };

    return (
        <header>
            {renderNavBarContent()}
        </header>
    );
};

export default NavBar;