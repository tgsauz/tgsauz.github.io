const Info = ({ isVisible }) => {
    return (
        <section className={`page ${isVisible ? "visible" : "hidden"}`}>
            <a className="instagram" href="https://www.instagram.com/tgsauz/" target="_blank" rel="noopener">
                Instagram ↗
            </a>
        </section>
    )
}

export default Info;