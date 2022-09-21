import "../../css/NavBar/Logo.css";

import logo from "../../css/logo-menu.png";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <div className="div-logo">
                    <img className="img-logo" alt="logo" src={logo} />
                    <span className="span-logo">Coffee</span>
                </div>
            </Link>
        </div>
    );
};

export default Logo;
