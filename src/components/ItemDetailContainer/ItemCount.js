import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import "../../css/ItemDetail/Count.css";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ Count, Add, Subtract, agregarAlCarrito }) => {
    const [open, setOpen] = useState(true);

    const alerta = () => {
        setOpen(false);
        toast.info("Se agrego el producto al carrito!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        agregarAlCarrito();
    };

    return (
        <>
            <h1 className="title">Cantidad</h1>
            <div className="div-add-cart">
                <button
                    className="btn"
                    onClick={() => {
                        Subtract();
                    }}
                >
                    -
                </button>

                <span className="span-count-order">{Count}</span>

                <button
                    className="btn"
                    onClick={() => {
                        Add();
                    }}
                >
                    +
                </button>
            </div>

            <div className="center">
                {open ? (
                    <span className="btn-add-cart " onClick={() => alerta()}>
                        Agregar Al Carrito
                    </span>
                ) : (
                    <>
                        <span className="btn-add-cart">
                            <Link to="/cart">Ir Al Carrito</Link>
                        </span>
                    </>
                )}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default ItemCount;
