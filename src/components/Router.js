import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import CartProvider from "./Context/CartProvider";
const Router = () => {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path={`/`} element={<ItemListContainer />} />
                        <Route
                            path={`/category/:categoryId`}
                            element={<ItemListContainer />}
                        />
                        <Route
                            path={"/item/:itemId"}
                            element={<ItemDetailContainer />}
                        />

                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </>
    );
};

export default Router;
