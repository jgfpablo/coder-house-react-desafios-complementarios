import { NavBar } from "./components/NavBar";

import ItemDetailContainer from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import "./css/css.css";

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer />
            <ItemDetailContainer />
        </div>
    );
}

export default App;
