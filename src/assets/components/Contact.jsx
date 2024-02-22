const Contact = ({ isVisible }) => {
    return(
        <section className={`page ${isVisible ? "visible" : "hidden"}`} data-page="Contact">
            <div className="contenido_pagina contact">
                <ul className="contact-list">
                    <li>
                        <p className="mail">
                            tomgandulfo@gmail.com
                        </p>
                    </li>
                    <li>
                        <a className='calendly' href="https://calendly.com/tomgandulfo/30min" target="_blank" rel="noopener noreferrer">
                            Schedule a meeting ↗
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Contact;