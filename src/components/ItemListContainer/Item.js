import { useState } from "react";
import "../../css/ItemListContainer/item.css";
const Item = ({ dato, Details }) => {
    const [count, setCount] = useState(0);

    const open = true;

    const Add = () => {
        count < dato.cantidad
            ? setCount(count + 1)
            : alert(`Maximo de stock alcanzado ${dato.cantidad}.
            En este momento no se posee mas cantidad de este producto`);
    };

    const Subtract = () => {
        count === 0
            ? alert("La cantidad minima ya ah sido alcanzada")
            : setCount(count - 1);
    };

    const AddToCart = () => {
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
        <div className="card-products">
            <img className="product-img" src={dato.imagen} alt="img-product" />

            <span className="product-name"> {dato.nombre} </span>

            <div className="div-actions">
                <button
                    onClick={() => {
                        Subtract();
                    }}
                    className="button"
                >
                    -
                </button>

                <span className="span-count-order">{count}</span>
                <button
                    onClick={() => {
                        Add();
                    }}
                    className="button"
                >
                    +
                </button>
            </div>

            <div className="div-add-cart">
                <span
                    onClick={() => {
                        AddToCart();
                    }}
                    className="btn-add-cart"
                >
                    Agregar Al Carrito
                </span>

                <span
                    onClick={() => {
                        Details(dato, open);
                    }}
                    className="btn-add-cart"
                >
                    Preview
                </span>
            </div>
        </div>
    );
};

export default Item;
