import { useContext } from "react";
import { ContextCart } from "./Context/CartContext";

import "../css/table.css";

const Cart = () => {
    const { state } = useContext(ContextCart);
    console.log(state);
    return (
        <table>
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>imagen</th>
                    <th>precio</th>
                    <th>cantidad</th>
                </tr>
            </thead>
            <tbody>
                {state.map((stat, index) => {
                    return (
                        <tr>
                            <td>{stat.nombre}</td>
                            <td>
                                <img src={stat.imagen} />
                            </td>
                            <td>{stat.precio}</td>
                            <td>{stat.cantidad}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Cart;
