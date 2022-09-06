import { useState } from "react";
import "../../css/ItemCount/itemcount.css";
const ItemCount = ({ stock, producto }) => {
    const [count, setCount] = useState(0);

    const Sumar = (stock) => {
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
        alert("los productos se han agregado al carrito");
        setCount(0);
    };

    return (
        <div className="div-item-count">
            <img src={`https://robohash.org/${producto}`} />

            <div className="div">
                <button
                    className="btn"
                    onClick={() => {
                        Restar();
                    }}
                >
                    -
                </button>
                <span className="spn">{count}</span>
                <button
                    className="btn"
                    onClick={() => {
                        Sumar(stock);
                    }}
                >
                    +
                </button>
            </div>
            <div className="btn-agregar">
                <span onClick={Agregar} className="span">
                    Agregar Al Carrito
                </span>
            </div>
        </div>
    );
};

export default ItemCount;
