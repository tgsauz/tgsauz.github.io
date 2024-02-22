const NotFound = ({ isVisible }) =>{
    return(
        <section className={`page ${isVisible ? "visible" : "hidden"}`}>
            <span className='notfound'>
                <h1>Error 404: Not Found</h1>
            </span>
        </section>
    )
}

export default NotFound;