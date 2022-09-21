import React, { createContext, useState } from "react";

const CartContext = (props) => {
    const [state, setState] = useState([]);

    return (
        <ContextCart.Provider value={{ state, setState }}>
            {props.children}
        </ContextCart.Provider>
    );
};

export default CartContext;
export const ContextCart = createContext();
