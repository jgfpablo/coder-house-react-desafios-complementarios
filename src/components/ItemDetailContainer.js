import ItemDetail from "./ItemDetailContainer/ItemDetail";
import loader from "../assets/loader.svg";
import products from "../products";
import { useState } from "react";
import "../css/ItemDetailContainer/ItemDetailContainer.css";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    setTimeout(() => {
        products
            .then((products) => setItem(products[itemId]))
            .then(setLoading(false));
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
