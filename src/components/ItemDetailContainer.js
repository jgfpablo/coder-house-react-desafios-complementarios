import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetailContainer/ItemDetail";
import productos from "../api";

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            productos.then((res) => setData(res[0]));
        }, 3000);
    }, []);

    return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
