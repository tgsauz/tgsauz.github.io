// Estilos
import "./assets/styles/App.css";
import "./assets/styles/Nav.css"
import "./assets/styles/HomePage.css"

// Componentes
import HomePage from "./assets/components/HomePage.jsx";
import Nav from "./assets/components/Nav.jsx";

function App() {
    return(
        <>
            <Nav/>
            <HomePage/>
        </>   
    )
}

export default App;