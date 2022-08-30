import "../css/ItemListContainer/ItemList.css";
export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="list">
            <div>{greeting}</div>
        </div>
    );
};
