import { Outlet, useLocation, useNavigate } from "react-router-dom";

// style
import './css/Header.css'

// Logo
import icarLogo from '../img/icar-logo.png'
import { } from "react-icons";
import { BsFillPersonFill, BsKey, BsPersonPlus } from "react-icons/bs";

const Header: React.FC = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const handleCadastrarSeClick = () => {
        navigate('/cadastrarPessoa');
    };

    const handlePerfilClick = () => {
        navigate('/perfil');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const renderHeaderContent = () => {

        if (location.pathname === '/') {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <div className="logo">
                                    <img src={icarLogo} alt="icar-Logo" />
                            </div>
                            <div className="nav-buttons">
                                <ul>
                                    <li >
                                        <button className="azul" onClick={handleCadastrarSeClick}>
                                            <BsPersonPlus className="icon" />
                                            <span className="label">Cadastrar-se</span>
                                        </button>
                                    </li>
                                    <li >
                                        <button className="verde" onClick={handleLoginClick}>
                                            <BsKey className="icon" />
                                            <span className="label">Login</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        } else if (location.pathname === '/cadastrarVeiculo' || location.pathname === '/atualizarVeiculo' || location.pathname === '/excluirVeiculo' || location.pathname === '/visualizarVeiculos' || location.pathname === '/gerenciarVeiculos') {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <div className="logo">

                                <img src={icarLogo} alt="icar-Logo" />
                            </div>
                            <div className="nav-buttons">
                                <ul>
                                    <li >
                                        <button className="azul" onClick={handlePerfilClick}>
                                            <BsFillPersonFill className="icon" />
                                            <span className="label">Perfil</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        }
    }

    return (
        <header>
            {renderHeaderContent()}
        </header>
    );

};
export default Header;
