const Info = ({ isVisible }) => {
    return (
        <section className={`page ${isVisible ? "visible" : "hidden"}`}>
            <ul className="infos-list">
                <li>
                    <a className="instagram" href="https://www.instagram.com/tgsauz/" target="_blank" rel="noopener noreferrer">
                        Instagram ↗
                    </a>
                </li>
                <li>
                    <a className="github" href="https://github.com/tgsauz" target="_blank" rel="noopener noreferrer">
                        Github ↗
                    </a>
                </li>
                <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/tomasgandulfo/" target="_blank" rel="noopener noreferrer">
                        LinkedIn ↗
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Info;