import "../../css/ItemDetail/ItemDetail.css";

import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ContextCart } from "../Context/CartContext";

const ItemDetail = ({ data }) => {
    const MySwal = withReactContent(Swal);
    const [count, setCount] = useState(0);
    const { AddToCartList } = useContext(ContextCart);

    const agregarAlCarrito = () => {
        AddToCartList(data, count);
        setCount(0);
    };

    const Add = () => {
        if (count === data.cantidad) {
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

    return data.imagen !== undefined ? (
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
                        stock: {data.cantidad}
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
    ) : (
        <div className="div-loader">
            <img
                alt="loader"
                className="loader"
                src="../assets/img/loader.svg"
            />
        </div>
    );
};

export default ItemDetail;
