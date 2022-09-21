import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/ItemListContainer/item.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Item = ({ item }) => {
    const MySwal = withReactContent(Swal);
    const [count, setCount] = useState(0);

    const Add = () => {
        if (count === 0) {
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

    const AddToCart = () => {
        if (count !== 0) {
            alert(
                `El Producto ${item.nombre} se ah agregado al carrito
            por la cantidad de ${count}`
            );
            item.cantidad = item.cantidad - count;
            // setCount(0);
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

                <span className="btn-add-cart">
                    <Link to={`/item/` + item.id}>Preview</Link>
                </span>
            </div>
        </div>
    );
};

export default Item;
