import { Link } from "react-router-dom";
import "../../css/NavBar/Nav.css";

export const Nav = () => {
    const category = "Bebidas Calientes";

    return (
        <div className="nav">
            <div className="navegacion">
                <ul className="ul">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to={"/category/Bebidas Calientes"}>
                            BebidasCalientes
                        </Link>
                    </li>
                    <li>
                        <Link to={"/category/Bebidas Frias"}>BebidasFrias</Link>
                    </li>
                    <li>
                        <Link to={"/category/Salados"}>Salados</Link>
                    </li>
                    <li>
                        <Link to={"/category/Postres"}>Postres</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
