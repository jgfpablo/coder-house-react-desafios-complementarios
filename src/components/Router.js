import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ItemListContainer } from "./ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer";

import { NavBar } from "./NavBar";
import Footer from "./Footer";
import Cart from "./Cart";

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path={`/`} element={<ItemListContainer />} />
                    <Route
                        path={`/category/:idCategory`}
                        element={<ItemListContainer />}
                    />

                    <Route
                        path={`item/:idProduct`}
                        element={<ItemDetailContainer />}
                    />

                    <Route path={`/cart`} element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};
