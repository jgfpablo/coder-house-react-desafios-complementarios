import "../../css/NavBar/Logo.css";

import logo from "../../css/logo-menu.png";

const Logo = () => {
    return (
        <div className="logo">
            <img className="img-logo" src={logo} />
            <span className="span-logo">Coffee</span>
        </div>
    );
};

export default Logo;
