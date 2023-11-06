const NotFound = ({ isVisible }) =>{
    return(
        <section className={`page ${isVisible ? "visible" : "hidden"}`}>
            <h1>Error 404: Not Found</h1>
        </section>
    )
}

export default NotFound;