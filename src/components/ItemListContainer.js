import ItemList from "./ItemListContainer/ItemList";
import productos from "../api";
import "../css/ItemListContainer/ItemListContainer.css";

import { useEffect, useState } from "react";

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            productos.then((res) => setData(res));
        }, 3000);
    }, []);

    return (
        <div className="list">
            <ItemList Data={data} />
        </div>
    );
};
