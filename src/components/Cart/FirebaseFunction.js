import { useState } from "react";
import { createItem, getItemById2, updateItem } from "../../api";
import "../../css/Cart/FirebaseFunction.css";
import loader from "../../assets/loader.svg";

const FirebaseFunction = ({ compras, total, usuario }) => {
    let fecha = new Date().toDateString();
    const [open, setOpen] = useState(true);

    let all = { compras, fecha, usuario, total };

    const EnviarDatos = async () => {
        setOpen(false);
        await createItem(all);

        compras.map(async (item) => {
            let id = String(item.idInterno);
            let resp;

            await getItemById2(id).then((respuesta) => (resp = respuesta));

            let cantidad;
            cantidad = resp.cantidad - item.cantidad;

            updateItem(id, { cantidad });

            window.location.href = "/";
        });
    };

    return (
        <>
            {open === true ? (
                <div
                    onClick={() => {
                        EnviarDatos();
                    }}
                >
                    Realizar Compra
                </div>
            ) : (
                <div className="cargador">
                    <img alt="loader" src={loader} />
                </div>
            )}
        </>
    );
};

export default FirebaseFunction;
