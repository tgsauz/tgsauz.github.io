const Projects = ({ isVisible }) => {

    return (
        <section className={`page ${isVisible ? "visible" : "hidden"}`} data-page="Projects">
            <div className="projects-container">
                <ul className="projects-list">
                    <li>
                        <a className='projects kazoovm' href='https://kazoovideo.com/' target="_blank" rel='noopener noreferrer'>
                            <h5>KazooVM's Website ↗</h5>
                        </a>
                        <span>Commission.</span>
                    </li>
                    <li>
                        <a className='projects agendapy' href='https://github.com/tgsauz/CuzcoEstudio-Manager' target="_blank" rel='noopener noreferrer'>
                            <h5>CuzcoEstudio Manager ↗</h5>
                        </a>
                        <span>Python database management desktop app project.</span>
                    </li>
                    <li>
                        <a className="projects eda1" href='https://github.com/tgsauz/proyectofinalEDA1' target="_blank" rel='noopener noreferrer'>
                            <h5>EDA 1 ↗</h5>
                        </a>
                        <span>Final project for <a className="highlight" href="https://web.upe.edu.ar/" target="_blank" rel="noopener noreferrer">UPE's</a> 'Data Structures and Algorithms I' class. </span>
                    </li>
                    <li>
                        <a className="projects eda2" href='https://github.com/tgsauz/proyectoEda2' target="_blank" rel='noopener noreferrer'>
                           <h5>EDA 2 ↗</h5>
                        </a>
                        <span>Final project for <a className="highlight" href="https://web.upe.edu.ar/" target="_blank" rel="noopener noreferrer">UPE's</a> 'Data Structures and Algorithms II' class.</span>
                    </li>
                </ul>
            </div>
        </section>

    );
}

export default Projects;