import "../../css/ItemDetail/ItemDetail.css";

import React, { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ContextCart } from "../Context/CartContext";

const ItemDetail = ({ data }) => {
    const MySwal = withReactContent(Swal);
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState();

    const { state, setState } = useContext(ContextCart);

    useEffect(() => {
        if (state.find((stat) => data.id === stat.id)) {
            state.map((stat) => {
                if (stat.id === data.id) {
                    setQuantity(data.cantidad - state[stat.id].cantidad);
                    setCount(state[stat.id].cantidad);
                }
            });
        } else {
            setQuantity(data.cantidad);
        }
    }, [data]);

    const agregarAlCarrito = () => {
        if (state.find((stat) => data.id === stat.id)) {
            state.map((stat) => {
                if (stat.id === data.id) {
                    state[stat.id].cantidad = state[stat.id].cantidad + count;
                }
            });
        } else {
            let datos = { ...data };

            datos.cantidad = count;

            setState([...state, datos]);
            setCount(0);
        }
    };

    const Add = () => {
        if (count >= quantity) {
            MySwal.fire({
                html: <i>No quedan mas existencias de este producto!</i>,
                icon: "warning",
            });
        } else {
            setCount(count + 1);
        }
    };

    const Subtract = () => {
        if (count === 0) {
            MySwal.fire({
                html: (
                    <i>La cantidad minima de producto ya ah sido alcanzada!</i>
                ),
                icon: "warning",
            });
        } else {
            setCount(count - 1);
        }
    };

    return (
        <div className="Item-Detail-Container">
            <div className="Item-Detail">
                <img
                    width={100}
                    alt="producto"
                    className="img-detail"
                    src={data.imagen}
                />
                <div className="description">
                    <h1 className="text-center item-detail-name">
                        {data.nombre}
                    </h1>
                    <p className="text-center item-detail-stock">
                        stock: {quantity}
                    </p>
                    <p className="text-center item-detail-price">
                        precio: {data.precio}
                    </p>

                    <p className=" item-detail-description">
                        Descripcion:
                        {data.descripcion}
                    </p>

                    <div>
                        <ItemCount
                            agregarAlCarrito={agregarAlCarrito}
                            Count={count}
                            Add={Add}
                            Subtract={Subtract}
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
