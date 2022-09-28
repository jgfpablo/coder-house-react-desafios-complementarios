import { useContext } from "react";
import { CartContext } from "./Context/CartProvider";
import { BsTrash } from "react-icons/bs";
import "../css/Cart/Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
    const { list, Clear, RemoveItemToCart } = useContext(CartContext);

    return list.length === 0 ? (
        <div className="table-container">
            <div className="text-cart">
                Usted no posee productos en el carrito
                <Link to="/" className="Ir-Inicio">
                    Ir a Inicio
                </Link>
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
                            <th>TOTAL</th>
                            <th>ACCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => {
                            return (
                                <tr className="tr" key={index}>
                                    <td className="td">{item.nombre}</td>
                                    <td>
                                        <img
                                            alt="product"
                                            className="img-table"
                                            src={item.imagen}
                                        />
                                    </td>
                                    <td>{"$" + item.precio}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{"$" + item.precio * item.cantidad}</td>
                                    <td>
                                        <button
                                            className="quitar"
                                            onClick={() =>
                                                RemoveItemToCart(item.idInterno)
                                            }
                                        >
                                            <BsTrash />
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
