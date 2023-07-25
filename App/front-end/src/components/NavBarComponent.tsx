import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

// icons
import {
    BsFillPersonFill,
    BsKey,
    BsPersonPlus
} from "react-icons/bs";

import {
    FaCar,
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
    const { placa } = useParams<{ placa: string }>();
    const { cpf } = useParams<{ cpf: string }>();
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
        navigate('visualizarAlugueis');
    }

    const handlePaginaInicalClick = () => {
        navigate('./');
    };

    const handleSairClick = () => {
        navigate('./login');
    };

    const handleMenuPrincipalClick = () => {
        navigate(`/principalCliente/${cpf}`);
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
                <button className="roxo" onClick={handlePerfilClick}>
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

    const SairButton: React.FC = () => {
        return (
            <li>
                <button className="vermelho" onClick={handleSairClick}>
                    <span className="label">Sair</span>
                </button>
            </li>
        );
    };

    const MenuPrincipalButton: React.FC = () => {
        return (
            <li>
                <button className="azul" onClick={handleMenuPrincipalClick}>
                    <FaHome className="icon" />
                    <span className="label">Menu Principal</span>
                </button>
            </li>
        );
    };

    const GerenciarVeiculosButton: React.FC = () => {
        return (
            <li>
                <button className="preto" onClick={handleGerenciarVeiculosClick}>
                    <FaCar className="icon" />

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
                                    <VisualizarAlugueisButton />
                                    <GerenciarVeiculosButton />
                                    <SairButton />
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        } else if (
            location.pathname === '/visualizarAlugueis' 
        ) {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <Logo />
                            <div className="nav-buttons">
                                <ul>
                                    <PerfilButton />
                                    <GerenciarVeiculosButton />
                                    <SairButton />
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        }
        else if (location.pathname === '/cadastrarPessoa') {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <Logo />
                            <div className="nav-buttons">
                                <ul>
                                    <PaginaInicialButton />
                                    <LoginButton />
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        } else if (location.pathname === '/login') {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <Logo />
                            <div className="nav-buttons">
                                <ul>
                                    <PaginaInicialButton />
                                    <CadastrarSeButton />
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        } else if (location.pathname === `/principalCliente/${cpf}`) {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <Logo />
                            <div className="nav-buttons">
                                <ul>
                                    <PerfilButton />
                                    <SairButton />
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        } else if (location.pathname === `/alugar/${cpf}/${placa}`) {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <Logo />
                            <div className="nav-buttons">
                                <ul>
                                    <MenuPrincipalButton />
                                    <PerfilButton />
                                    <SairButton />
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        } else if (location.pathname === '/perfil') {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <Logo />
                            <div className="nav-buttons">
                                <ul>
                                    <MenuPrincipalButton />
                                    <SairButton />
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