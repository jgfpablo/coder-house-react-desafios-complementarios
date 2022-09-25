import { Link } from "react-router-dom";
import "../../css/NavBar/CartWidget.css";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../Context/CartProvider";
import { useContext, useEffect } from "react";
const CartWidget = () => {
    const { list } = useContext(CartContext);

    useEffect(() => {}, [list]);

    return list.length > 0 ? (
        <div className="CartWidget">
            <Link to="/cart">
                <BsCart4 className="icon" />
                <label className="quantity">{list.length}</label>
            </Link>
        </div>
    ) : (
        <div className="CartWidget"></div>
    );
};

export default CartWidget;
