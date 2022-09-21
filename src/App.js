import CartContext from "./components/Context/CartContext";
import { Router } from "./components/Router";

import "./css/css.css";

function App() {
    return (
        <CartContext>
            <Router />
        </CartContext>
    );
}

export default App;
