import ItemList from "./ItemListContainer/ItemList";
import productos from "../products";
import "../css/ItemListContainer/ItemListContainer.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { idCategory } = useParams();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
        if (idCategory) {
            setTimeout(() => {
                productos.then((res) =>
                    setData(
                        res.filter(
                            (res) =>
                                res.categoria === idCategory.replace("-", " ")
                        )
                    )
                );
                setLoading(true);
            }, 2000);
        } else {
            setLoading(false);
            setTimeout(() => {
                productos.then((res) => setData(res));
                setLoading(true);
            }, 2000);
        }
    }, [idCategory]);

    return loading === true ? (
        <div className="list">
            <ItemList Data={data} />
        </div>
    ) : (
        <div className="div-loader">
            <img
                alt="loader"
                className="loader"
                src="../assets/img/loader.svg"
            />
        </div>
    );
};
