import "../../css/ItemDetail/ItemDetail.css";

import React from "react";

const ItemDetail = ({ data }) => {
    return (
        <div className="Item-Detail-Container">
            <div className="Item-Detail">
                <img
                    width={100}
                    alt="producto"
                    className="img-detail"
                    src={data.imagen}
                />
                <div className="description">
                    <h1 className="text-center item-detail-name">
                        {data.nombre}
                    </h1>
                    <p className="text-center item-detail-stock">
                        stock: {data.cantidad}
                    </p>
                    <p className="text-center item-detail-price">
                        precio: {data.precio}
                    </p>

                    <p className=" item-detail-description">
                        Descripcion:
                        {data.descripcion}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
