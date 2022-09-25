import { Link } from "react-router-dom";
import "../../css/ItemListContainer/item.css";
const Item = ({ product }) => {
    return (
        <div className="Item">
            <img className="img" alt="product" src={product.imagen} />
            <span className="name">{product.nombre}</span>
            <span className="description">{product.descripcion}</span>
            <span className="stock">
                Cantidad Disponible : {product.cantidad}
            </span>

            <Link className="a" to={"/item/" + product.id}>
                <button className="button">Ver Detalles del Producto</button>
            </Link>
        </div>
    );
};

export default Item;
