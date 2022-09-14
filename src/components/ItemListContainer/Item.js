import { useState } from "react";
import "../../css/ItemListContainer/item.css";
const Item = ({ item }) => {
    const [count, setCount] = useState(0);

    const Add = () => {
        count < item.cantidad
            ? setCount(count + 1)
            : alert(`Maximo de stock alcanzado ${item.cantidad}.
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
                `El Producto ${item.nombre} se ah agregado al carrito
            por la cantidad de ${count}`
            );
            item.cantidad = item.cantidad - count;
            setCount(0);
        } else {
            alert(
                "Para agregar un producto al carrito la cantidad debe de ser mayor a 0"
            );
        }
    };

    return (
        <div className="card-products">
            <img className="product-img" src={item.imagen} alt="img-product" />

            <span className="product-name"> {item.nombre} </span>

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

                <span className="btn-add-cart">Preview</span>
            </div>
        </div>
    );
};

export default Item;
