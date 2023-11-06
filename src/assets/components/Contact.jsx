const Contact = ({ isVisible }) => {
    return(
        <section className={`page ${isVisible ? "visible" : "hidden"}`} data-page="Contact">
            <div className="contenido_pagina contact">
                <p className="contact_">
                    tomgandulfo@gmail.com
                </p>
            </div>
        </section>
    )
}
export default Contact;