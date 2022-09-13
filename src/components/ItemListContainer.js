import ItemList from "./ItemListContainer/ItemList";
import { useState } from "react";
import ItemDetailContainer from "./ItemListContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

import "../css/ItemListContainer/ItemListContainer.css";

export const ItemListContainer = () => {
    const params = useParams();
    console.log(params);
    const [preview, setPreview] = useState([""]);
    const [open, setOpen] = useState(false);

    const Details = (product, open) => {
        setPreview(product);
        setOpen(open);
    };

    return (
        <div className="list">
            <ItemList Details={Details} />
            <ItemDetailContainer
                Preview={preview}
                Open={open}
                Details={Details}
            />
        </div>
    );
};
