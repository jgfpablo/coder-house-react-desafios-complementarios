import { Link } from "react-router-dom";
import "../../css/NavBar/Nav.css";

export const Nav = () => {
    return (
        <div className="nav">
            <div className="navegacion">
                <ul className="ul">
                    <li>inicio</li>
                    <li>Nosotros</li>
                    <li>Menu</li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
