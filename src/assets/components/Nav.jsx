import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <header className="encabezado" id="Encabezado">
            <h1 className="encabezadoTitulo">Tomás E. Gandulfo</h1>
            <p className="encabezadoSubtitulo">Developer</p>
            <nav className="encabezado_nav" x-data>
                <ol>
                    <li>
                        <a className="_texto" href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="_texto" href="https://github.com/tgsauz?tab=repositories" target="_blank">
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a className="_texto" href="/info">
                            Información
                        </a>
                    </li>
                    <li>
                        <a className="_texto" href="/contact">
                            Contacto
                        </a>
                    </li>
                </ol>
            </nav>
        </header>
    )
}

export default Nav;