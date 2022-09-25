import { useContext, useState } from "react";
import { CartContext } from "../Context/CartProvider";
import "../../css/ItemDetailContainer/ItemDetail.css";
import ItemCount from "./ItemCount";
import { AddedProduct, ToastContainer } from "./ItemCount/AlertsAndCounts";

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);
    const [visibility, setVisibility] = useState(true);
    const { AddItemToList } = useContext(CartContext);

    const AddToCart = () => {
        setVisibility(false);
        AddItemToList(item, count);
        AddedProduct();
    };

    return (
        <div className="ItemDetail">
            <img className="img" alt="producto" src={item.imagen} />
            <div className="card-itemDetail">
                <span>{item.nombre}</span>
                <span>Descripcion: {item.descripcion}</span>
                <span>Precio: $ {item.precio}</span>
                <span>Cantidad Disponible:{item.cantidad}</span>
                <ItemCount
                    count={count}
                    setCount={setCount}
                    AddToCart={AddToCart}
                    visibility={visibility}
                    data={item}
                />
            </div>
            <ToastContainer />;
        </div>
    );
};

export default ItemDetail;
