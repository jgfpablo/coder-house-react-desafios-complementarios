import Logo from "./NavBar/Logo";
import Nav from "./NavBar/Nav";
import CartWidget from "./NavBar/CartWidget";

import "../css/NavBar/NavBar.css";

const NavBar = () => {
    return (
        <div className="NavBar">
            <Logo />
            <Nav />
            <CartWidget />
        </div>
    );
};

export default NavBar;
