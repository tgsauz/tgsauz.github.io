const HomePage = ({ isVisible }) => {

    return (
    <section className={`page ${isVisible ? "visible" : "hidden"}`} data-page="Home">
        <div className="contenido_pagina home">
            <p className="home_sobremi">
                <span>Born in 2001</span>
                <span>Buenos Aires, Argentina.</span>
                <span>My mision is to excel</span>
                <span>in all realms of</span>
                <span>human endeavor.</span>
                <span>Building the future</span>
                <span>one step at a time.</span>
            </p>
        </div>
    </section>
    );
};

export default HomePage;