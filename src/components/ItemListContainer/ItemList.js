import { useEffect, useState } from "react";

import Item from "./Item";
import productos from "../../api";

import "../../css/ItemListContainer/ItemList.css";
const ItemList = ({ Details }) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            productos.then((res) => setDatos(res));
        }, 3000);
    }, []);

    return (
        <div className="list">
            {datos.map((dato, index) => {
                return <Item dato={dato} key={index} Details={Details} />;
            })}
        </div>
    );
};

export default ItemList;
