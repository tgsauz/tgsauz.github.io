import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Componentes
import App from "./App.jsx";

//Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import "./assets/styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <App />
    </>

);
