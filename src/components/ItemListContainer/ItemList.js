import { useEffect, useState } from "react";

import Item from "./Item";
import productos from "../../api";
import ItemCount from "./ItemCount";

import "../../css/ItemListContainer/ItemList.css";
const ItemList = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            productos.then((res) => setDatos(res));
        }, 3000);
    }, []);

    return (
        <div className="list">
            <ItemCount producto="Ejemplo de itemCount" stock={2} />

            {datos.map((dato, index) => {
                return <Item dato={dato} key={index} />;
            })}
        </div>
    );
};

export default ItemList;
