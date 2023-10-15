import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "assets/js/App.jsx";

//Componentes
import App from "./App";
import Nav from "./Nav";
import Contact from "../components/Contact";

//Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/style.css";
import NotFound from "../components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </BrowserRouter>
);
