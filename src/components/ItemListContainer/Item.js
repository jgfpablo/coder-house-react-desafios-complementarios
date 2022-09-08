import { useState } from "react";
import "../../css/ItemListContainer/item.css";
const Item = ({ dato }) => {
    const [count, setCount] = useState(0);

    const Sumar = () => {
        count < dato.cantidad
            ? setCount(count + 1)
            : alert(`Maximo de stock alcanzado ${dato.cantidad}.
            En este momento no se posee mas cantidad de este producto`);
    };

    const Restar = () => {
        count === 0
            ? alert("La cantidad minima ya ah sido alcanzada")
            : setCount(count - 1);
    };

    const Agregar = () => {
        if (count !== 0) {
            alert(
                `El Producto ${dato.nombre} se ah agregado al carrito
            por la cantidad de ${count}`
            );
            dato.cantidad = dato.cantidad - count;
            setCount(0);
        } else {
            alert(
                "Para agregar un producto al carrito la cantidad debe de ser mayor a 0"
            );
        }
    };

    return (
        <div className="div-item">
            <span className="nombre-producto"> {dato.nombre} </span>

            <img
                src={dato.imagen}
                width="300px"
                height="300px"
                alt="imagen-producto"
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

export default Item;
