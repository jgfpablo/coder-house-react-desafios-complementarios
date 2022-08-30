import "../css/NavBar/Nav.css";

import CartWidget from "./NavBar/CartWidget";
import Logo from "./NavBar/Logo";
import Nav from "./NavBar/Nav";

export const NavBar = () => {
    return (
        <nav className="nav-full">
            <Logo />
            <Nav />
            <CartWidget />
        </nav>
    );
};
