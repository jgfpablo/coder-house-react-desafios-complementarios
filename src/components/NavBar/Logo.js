import { Link } from "react-router-dom";
import "../../css/NavBar/Logo.css";
import logo from "../../assets/logo-menu.png";

const Logo = () => {
    return (
        <Link className="a-logo" to="/">
            <div className="Logo">
                <img alt="logo" className="img-logo" src={logo} />
                Coffee
            </div>
        </Link>
    );
};

export default Logo;
