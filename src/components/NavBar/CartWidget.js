import "../../css/NavBar/CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <NavLink
                to="/cart"
                className={(navData) => (navData.isActive ? "active" : "")}
            >
                <FaShoppingCart size="2rem" className="carrito" />
            </NavLink>
        </div>
    );
};

export default CartWidget;
