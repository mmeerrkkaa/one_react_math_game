import {NavLink, Outlet} from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/game">Игра</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/settings">Настройки</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/results">Результаты</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/resultstwo">Результаты v2</NavLink>
                            </li>
                        </ul>
                </div>
            </nav>
            <div className="container">
                <Outlet/>
            </div>
        </>
    );
};

export default Navbar;