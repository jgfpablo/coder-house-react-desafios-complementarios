import ItemList from "./ItemListContainer/ItemList";
import loader from "../assets/loader.svg";
import "../css/ItemListContainer/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getItems, getItemsByCondition } from "../api";

const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState();
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            categoryId === undefined
                ? getItems(setLoading).then((products) =>
                      setListProducts(products)
                  )
                : getItemsByCondition(
                      categoryId.replace("-", " "),
                      setLoading
                  ).then((products) => setListProducts(products));
        }, 3000);
    }, [categoryId]);

    return loading === false ? (
        <div>
            <ItemList listProducts={listProducts} />
        </div>
    ) : (
        <div className="loader">
            <img className="img-loader" alt="loader" src={loader} />
        </div>
    );
};

export default ItemListContainer;
