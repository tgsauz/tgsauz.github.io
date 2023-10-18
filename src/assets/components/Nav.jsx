import React, { useState, useEffect } from 'react';
import {NavLink, useLocation} from "react-router-dom";
import '../styles/Nav.css'; //Importar clases css de transicion

const tabsData = [
    { name: "Home", to: "/" },
    { name: "Proyectos", to: "https://github.com/tgsauz?tab=repositories", target: "_blank" },
    { name: "Información", to: "/info" },
    { name: "Contacto", to: "/contact" },
];

const HyperLinkTab = (props) => {
    const { name, to } = props;
    const location = useLocation();

    const isCurrentPage = location.pathname === to;    //Comprobar si estamos en la pagina actual

    return (
        <div className="_texto-container">
            {isCurrentPage ? (
                <div className="circle">●</div>
            ) : (
                <NavLink 
                className="_texto"
                to={to}
                target={props.target || "_self"}
                >
                    {name}
                </NavLink>
            )}
        </div>
    );
};

const Nav = () => {
    const [isCurrentPage, setCurrentPage] = useState('/');

    useEffect(() => {
        setCurrentPage(window.location.pathname);
    }, []);

    return(
        <header className="encabezado" id="Encabezado">
            <h1 className="encabezadoTitulo">Tomás E. Gandulfo</h1>
            <p className="encabezadoSubtitulo">Developer</p>
            <nav className="encabezado_nav">
                <ol>
                    {tabsData.map((tab, index) => (
                        <li key={index}>
                            <HyperLinkTab {...tab} />
                        </li>
                    ))}
                </ol>
            </nav>
        </header>
    )
}

export default Nav;