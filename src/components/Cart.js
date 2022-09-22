import { useContext } from "react";
import { ContextCart } from "./Context/CartContext";

import "../css/table.css";

const Cart = () => {
    const { cart, RemoveItemToCart, Clear } = useContext(ContextCart);

    return cart.length === 0 ? (
        <div className="table-container">
            <div className="text-cart">
                Usted no posee productos en el carrito
            </div>
        </div>
    ) : (
        <div className="cart">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>IMAGEN</th>
                            <th>PRECIO</th>
                            <th>CANTIDAD</th>
                            <th>ACCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((stat, index) => {
                            return (
                                <tr className="tr" key={index}>
                                    <td className="td">{stat.nombre}</td>
                                    <td>
                                        <img
                                            alt="product"
                                            className="img"
                                            src={stat.imagen}
                                        />
                                    </td>
                                    <td>{stat.precio}</td>
                                    <td>{stat.cantidad}</td>
                                    <td>
                                        <button
                                            className="quitar"
                                            onClick={() =>
                                                RemoveItemToCart(stat.id)
                                            }
                                        >
                                            Quitar
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="div-delete">
                <button className="btn-delete" onClick={() => Clear()}>
                    Vaciar Carrito
                </button>
            </div>
        </div>
    );
};

export default Cart;
