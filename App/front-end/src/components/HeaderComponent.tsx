import { Outlet, Link, useLocation } from "react-router-dom";

// style
import './css/Header.css'

// Logo
import icarLogo from '../img/icar-logo.png'

const Header: React.FC = () => {
    const location = useLocation();

    const renderHeaderContent = () => {

        if (location.pathname === '/') {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <div className="logo">

                                <img src={icarLogo} alt="icar-Logo" />
                            </div>
                            <div className="nav-links">
                                <ul>
                                    <li className="verde">
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li className="azul">
                                        <Link to="/cadastroPessoa">Cadastrar-se</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        } else if (location.pathname === '/cadastrarVeiculo' || location.pathname === '/atualizarVeiculo') {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <div className="logo">

                                <img src={icarLogo} alt="icar-Logo" />
                            </div>
                            <div className="nav-links">
                                <ul>
                                    <li className="azul">
                                        <Link to="/perfil">Perfil</Link>
                                    </li>
                                    <li className="vermelho">
                                        <Link to="/gerenciarVeiculos">Cancelar</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </>
            );
        }
        else if (location.pathname === '/gerenciarVeiculos' ) {
            return (
                <>
                    <nav>
                        <div className="header-container">
                            <div className="logo">

                                <img src={icarLogo} alt="icar-Logo" />
                            </div>
                            <div className="nav-links">
                                <ul>
                                    <li className="azul">
                                        <Link to="/perfil">Perfil</Link>
                                    </li>
                                    <li className="vermelho">
                                        <Link to="/gerenciarVeiculos">Cancelar</Link>
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
