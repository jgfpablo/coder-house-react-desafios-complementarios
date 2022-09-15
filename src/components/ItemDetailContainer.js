import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetailContainer/ItemDetail";
import productos from "../api";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    const { idProduct } = useParams();

    useEffect(() => {
        setTimeout(() => {
            productos.then((res) => setData(res[idProduct]));
        }, 3000);
    }, []);

    return <ItemDetail data={data} />;
};
