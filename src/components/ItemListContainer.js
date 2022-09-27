import ItemList from "./ItemListContainer/ItemList";
import loader from "../assets/loader.svg";
import "../css/ItemListContainer/ItemListContainer.css";
import products from "../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./Firebase/FirebaseConfig";

import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState();
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDocs(collection(db, "Bebidas Calientes"));
            console.log(data.docs);
        };

        fetchData();

        setTimeout(() => {
            products
                .then((products) =>
                    setListProducts(
                        products.filter((produc) =>
                            categoryId
                                ? produc.categoria ===
                                  categoryId.replace("-", " ")
                                : produc
                        )
                    )
                )
                .then(setLoading(false));
        }, 3000);

        return setLoading(true);
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
