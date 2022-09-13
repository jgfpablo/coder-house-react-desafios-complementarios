import "../../../css/ItemListContainer/ItemDetail/ItemDetail.css";

const ItemDetail = ({ Preview, Open, Details }) => {
    return (
        <div className={"modal-" + Open}>
            <div className="div-modal">
                <span
                    className="close-modal"
                    onClick={() => {
                        Details("", false);
                    }}
                >
                    X
                </span>

                <span className="nombre-producto"> {Preview.nombre} </span>

                <img
                    src={Preview.imagen}
                    width="300px"
                    height="300px"
                    alt="imagen-producto"
                />

                <div className="div-preview">
                    <span className="text-preview">
                        Precio:{Preview.precio}
                    </span>
                    <span className="text-preview">
                        categoria: {Preview.categoria}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
