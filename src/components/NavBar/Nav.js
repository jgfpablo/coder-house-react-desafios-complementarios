import { Link } from "react-router-dom";
import "../../css/NavBar/Nav.css";

export const Nav = () => {
    return (
        <div className="nav">
            <div className="navegacion">
                <ul className="ul">
                    <li>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "rgb(255, 255, 255, 0.75)",
                            }}
                            to={`/`}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>Nosotros</li>
                    <li>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.75)",
                            }}
                            to={"/"}
                        >
                            Productos
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
