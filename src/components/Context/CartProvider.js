import { createContext, useEffect, useState } from "react";

const CartProvider = ({ children }) => {
    const [list, setList] = useState([]);

    useEffect(() => {}, [list]);

    const AddItemToList = (item, quantity) => {
        let product = { ...item };
        product.cantidad = quantity;

        let result = list.find(
            (items) => items.idInterno === product.idInterno
        );
        result !== undefined
            ? list.map((items) => {
                  if (items.idInterno === product.idInterno) {
                      items.cantidad = items.cantidad + product.cantidad;
                  }
              })
            : setList([...list, product]);
    };

    const RemoveItemToCart = (id) => {
        list.map((item, index) => {
            if (item.idInterno === id) {
                list.splice(index, 1);
                setList([...list]);
            }
        });
    };

    const Clear = () => {
        setList([]);
    };

    return (
        <CartContext.Provider
            value={{ AddItemToList, list, RemoveItemToCart, Clear }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
export const CartContext = createContext();
