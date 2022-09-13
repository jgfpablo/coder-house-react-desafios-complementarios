import "../../css/NavBar/CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <FaShoppingCart size="2rem" className="carrito" />
        </div>
    );
};

export default CartWidget;
