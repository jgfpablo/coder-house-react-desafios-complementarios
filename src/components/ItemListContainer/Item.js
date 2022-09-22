import { Link } from "react-router-dom";
import "../../css/ItemListContainer/item.css";

const Item = ({ item }) => {
    return (
        <div className="card-products">
            <img className="product-img" src={item.imagen} alt="img-product" />

            <span className="product-name"> {item.nombre} </span>

            <span className="product-name"> {item.cantidad} </span>

            <div className="div-add-cart">
                <span className="btn-add-cart">
                    <Link to={`/item/` + item.id}>Preview</Link>
                </span>
            </div>
        </div>
    );
};

export default Item;
