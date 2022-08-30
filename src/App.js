import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Hola soy una prop" />
        </>
    );
}

export default App;
