import { useState } from "react";
import "../../css/ItemListContainer/item.css";

const ItemCount = ({ stock, producto }) => {
    const [count, setCount] = useState(0);

    const Sumar = () => {
        count < stock
            ? setCount(count + 1)
            : alert(`Maximo de stock alcanzado ${stock}`);
    };

    const Restar = () => {
        count === 0
            ? alert("La cantidad minima ya ah sido alcanzada")
            : setCount(count - 1);
    };

    const Agregar = () => {
        alert("El producto se han agregado al carrito");
        setCount(0);
    };

    return (
        <div className="div-item">
            <span className="nombre-producto"> {producto} </span>

            <img
                alt="PruebaItemCount"
                src={`https://robohash.org/${producto}`}
                width="300px"
                height={300}
            />

            <div className="div">
                <button
                    onClick={() => {
                        Restar();
                    }}
                    className="button"
                >
                    -
                </button>
                <span className="span">{count}</span>
                <button
                    onClick={() => {
                        Sumar();
                    }}
                    className="button"
                >
                    +
                </button>
            </div>
            <div className="agregar-carrito">
                <span
                    onClick={() => {
                        Agregar();
                    }}
                    className="btn-agregar-carrito"
                >
                    Agregar Al Carrito
                </span>
            </div>
        </div>
    );
};

export default ItemCount;
