import "../css/ItemListContainer/ItemList.css";
import ItemCount from "./ItemListContainer/ItemCount";
export const ItemListContainer = ({}) => {
    return (
        <div className="list">
            <ItemCount stock={5} producto={0} />
            <ItemCount stock={3} producto={1} />
            <ItemCount stock={7} producto={2} />
            <ItemCount stock={9} producto={3} />
            <ItemCount stock={5} producto={4} />
            <ItemCount stock={2} producto={5} />
            <ItemCount stock={8} producto={6} />
            <ItemCount stock={2} producto={7} />
            <ItemCount stock={6} producto={8} />
        </div>
    );
};
