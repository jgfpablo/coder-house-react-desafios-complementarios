import "../../css/NavBar/Nav.css";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <div className="eliminar-al-encontrar-icono">
                <FaShoppingCart size="2rem" className="carrito" />
            </div>
        </div>
    );
};

export default CartWidget;
