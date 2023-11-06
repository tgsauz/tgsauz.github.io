const HomePage = ({ isVisible }) => {

    return (
    <section className={`page ${isVisible ? "visible" : "hidden"}`} data-page="Home">
        <div className="contenido_pagina home">
            <p className="home_sobremi">
                <span>Nacido en 2001</span>
                <span>Buenos Aires, Argentina.</span>
                <span>Mi misión es alcanzar</span>
                <span>la máxima expresión</span>
                <span>posible de las</span>
                <span>capacidades humanas.</span>
                <span>Modular y tenaz.</span>
            </p>
        </div>
    </section>
    );
};

export default HomePage;