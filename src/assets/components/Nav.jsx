import {NavLink} from "react-router-dom";


const Nav = () => {
    return(
        <header>
            <h1 className="encabezadoTitulo">Tomas E. Gandulfo</h1>
            <p className="encabezadoSubtitulo">Developer</p>
            <nav>
                <ul className="list-group">
                    <NavLink className="list-group-item active" aria-current="true" to="/">
                        Home
                    </NavLink>
                    <NavLink className="list-group-item" to="">
                        Proyects
                    </NavLink>
                    <NavLink className="list-group-item" to="">
                        Info
                    </NavLink>
                    <NavLink className="list-group-item" to="/contact">
                        Contact
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;