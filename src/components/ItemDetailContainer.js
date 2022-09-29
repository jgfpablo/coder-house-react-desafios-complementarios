import ItemDetail from "./ItemDetailContainer/ItemDetail";
import loader from "../assets/loader.svg";
import { useState } from "react";
import "../css/ItemDetailContainer/ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { getItemById } from "../api";

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    setTimeout(() => {
        getItemById(itemId, setLoading).then((products) => setItem(products));
    }, 3000);

    return loading === false ? (
        <div className="ItemDetailContainer">
            <ItemDetail item={item} />
        </div>
    ) : (
        <div className="loader">
            <img alt="loader" src={loader} />
        </div>
    );
};

export default ItemDetailContainer;
