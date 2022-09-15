import ItemList from "./ItemListContainer/ItemList";
import productos from "../api";
import "../css/ItemListContainer/ItemListContainer.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory) {
            setTimeout(() => {
                productos.then((res) =>
                    setData(res.filter((res) => res.categoria === idCategory))
                );
            }, 3000);
        } else {
            setTimeout(() => {
                productos.then((res) => setData(res));
            }, 3000);
        }
    }, [idCategory]);

    return (
        <div className="list">
            <ItemList Data={data} />
        </div>
    );
};
