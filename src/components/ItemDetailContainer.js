import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetailContainer/ItemDetail";
import productos from "../products";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    const { idProduct } = useParams();

    useEffect(() => {
        setTimeout(() => {
            productos.then((res) => setData(res[idProduct]));
        }, 2000);
    }, [idProduct]);

    return <ItemDetail data={data} />;
};
