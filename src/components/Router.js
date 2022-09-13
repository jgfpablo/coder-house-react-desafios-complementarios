import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ItemListContainer } from "./ItemListContainer";
import { NavBar } from "./NavBar";

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={`/`} element={<ItemListContainer />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
