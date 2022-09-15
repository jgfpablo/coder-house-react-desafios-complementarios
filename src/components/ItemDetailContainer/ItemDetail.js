import "../../css/ItemDetail/ItemDetail.css";

import React from "react";

const ItemDetail = ({ data }) => {
    return (
        <div className="Item-Detail-Container">
            <h1>Item Detail</h1>

            <div className="Item-Detail">
                <img
                    width={100}
                    alt="producto"
                    className="img-detail"
                    src={data.imagen}
                />
                <div className="description">
                    <p className="text-center">{data.nombre}</p>
                    <p className="text-center">stock: {data.cantidad}</p>
                    <p className="text-center">precio: {data.precio}</p>
                    <span className="text-detail-description">
                        Descripcion:
                        {data.descripcion}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
