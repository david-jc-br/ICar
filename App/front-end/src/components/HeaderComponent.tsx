import { Outlet, Link } from "react-router-dom";

// style
import './css/Header.css'

// Logo
import icarLogo from '../img/icar-logo.png'

const Header = () => {
    return (
        <>
            <nav>
                <div className="header-container">
                    <div className="logo">
                        <img src={icarLogo} alt="icar-Logo" />
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li>
                                <Link to="/">Principal</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/cadastroPessoa">Cadastrar-se</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
};
export default Header;
