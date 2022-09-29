import { useContext, useState } from "react";
import { CartContext } from "./Context/CartProvider";
import { BsTrash } from "react-icons/bs";
import "../css/Cart/Cart.css";
import { Link } from "react-router-dom";
import FirebaseFunction from "./Cart/FirebaseFunction";

const Cart = () => {
    const { list, Clear, RemoveItemToCart } = useContext(CartContext);

    const [open, setOpen] = useState(false);
    const [compra, setCompra] = useState(true);

    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();

    let TOTAL = 0;

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
                            TOTAL = TOTAL + item.precio * item.cantidad;
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

            <div className="div-total">
                <span className="total">Total: ${TOTAL}</span>
            </div>

            <div className="div-delete">
                <button className="btn-delete" onClick={() => Clear()}>
                    Vaciar Carrito
                </button>
                <button
                    className="btn-build"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Comprar
                </button>
            </div>

            {open === true ? (
                <div className="modal">
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span
                                onClick={() => {
                                    setOpen(false);
                                }}
                                className="close"
                            >
                                &times;
                            </span>
                            <p className="title-modal">
                                Ingrese sus datos al formulario
                            </p>

                            <div className="modal-div-input">
                                <input
                                    onChange={(e) => setNombre(e.target.value)}
                                    className="modal-input"
                                    placeholder="Nombre"
                                />
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="modal-input"
                                    placeholder="Email"
                                />
                                <input
                                    onChange={(e) =>
                                        setTelefono(e.target.value)
                                    }
                                    className="modal-input"
                                    placeholder="Telefono"
                                />
                            </div>

                            <button className="button-modal" type="">
                                <FirebaseFunction
                                    usuario={{
                                        nombre: nombre,
                                        email: email,
                                        telefono: telefono,
                                    }}
                                    compras={list}
                                    total={TOTAL}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Cart;
