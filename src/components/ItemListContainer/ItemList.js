import Item from "./Item";

import "../../css/ItemListContainer/ItemList.css";
const ItemList = ({ Data }) => {
    return (
        <div className="list">
            {Data.map((item, index) => {
                return <Item item={item} key={index} />;
            })}
        </div>
    );
};

export default ItemList;
