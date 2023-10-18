import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// Estilos
import "./global.css"
import "./assets/styles/App.css";
import "./assets/styles/Nav.css";
import "./assets/styles/HomePage.css";
import "./assets/styles/Info.css";
import "./assets/styles/Contact.css";

function App() {
    const location = useLocation();
    
    return(
        <>
            <Outlet /> {/* Aquí se mostrará el contenido de la página actual */}
        </>   
    )
}

export default App;