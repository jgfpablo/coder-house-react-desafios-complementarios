import React, { createContext, useState } from "react";

const CartContext = (props) => {
    const [cart, setCart] = useState([]);
    let array = [];

    const AddToCartList = (data, count) => {
        if (cart.length === 0) {
            let data2 = { ...data };
            data2.cantidad = count;
            data.cantidad = data.cantidad - count;
            let array = [...cart, data2];
            setCart([...array]);
            count = 0;
        } else {
            cart.map((arr) => {
                if (arr.id === data.id) {
                    arr.cantidad = arr.cantidad + count;
                    data.cantidad = data.cantidad - count;
                    count = 0;
                } else {
                    if (cart.find((element) => element.id === data.id)) {
                    } else {
                        let data2 = { ...data };
                        data2.cantidad = count;
                        data.cantidad = data.cantidad - count;
                        let array = [...cart, data2];
                        setCart([...array]);
                        count = 0;
                    }
                }
            });
        }
    };

    const RemoveItemToCart = (id) => {
        cart.map((item, index) => {
            if (item.id === id) {
                cart.splice(index, 1);
                setCart([...cart]);
            }
        });
    };

    const clear = () => {
        setCart([]);
    };

    return (
        <ContextCart.Provider
            value={{ AddToCartList, cart, RemoveItemToCart, clear }}
        >
            {props.children}
        </ContextCart.Provider>
    );
};

export default CartContext;
export const ContextCart = createContext();
