import Item from "./Item";
import "../../css/ItemListContainer/ItemList.css";
const ItemList = ({ listProducts }) => {
    return (
        <div className="ItemList">
            {listProducts?.map((product, index) => {
                return <Item key={index} product={product} />;
            })}
        </div>
    );
};

export default ItemList;
