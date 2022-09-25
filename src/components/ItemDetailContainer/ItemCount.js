import { Link } from "react-router-dom";
import "../../css/ItemDetailContainer/ItemCount.css";
import { Add, Subtract, Minimum } from "./ItemCount/AlertsAndCounts";

const ItemCount = ({ count, setCount, AddToCart, visibility, data }) => {
    return visibility === true ? (
        <>
            <div className="div-count">
                <button
                    className="btn"
                    onClick={() => Subtract(setCount, count)}
                >
                    -
                </button>
                <span className="count">{count}</span>
                <button
                    className="btn"
                    onClick={() => Add(setCount, count, data)}
                >
                    +
                </button>
            </div>

            {count === 0 ? (
                <button className="addToCart" onClick={() => Minimum()}>
                    Agregar Al Carrito
                </button>
            ) : (
                <button
                    className="addToCart"
                    onClick={() => {
                        AddToCart();
                    }}
                >
                    Agregar Al Carrito
                </button>
            )}
        </>
    ) : (
        <>
            <Link to="/cart">
                <button className="addToCart" type="">
                    Ir Al Carrito
                </button>
            </Link>
        </>
    );
};

export default ItemCount;
