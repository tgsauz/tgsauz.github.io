import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./global.css";

//Componentes
import Nav from "./assets/components/Nav";
import Contact from "./assets/components/Contact";
import Info from "./assets/components/Info.jsx";
import NotFound from "./assets/components/NotFound";
import HomePage from "./assets/components/HomePage";

//Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <div className="container">
            <Nav />
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/info" element={<Info />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </BrowserRouter>
);
