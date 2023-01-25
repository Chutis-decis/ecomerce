import "../../css/app.css"


const Navss = () => {
    return (
        <div className="border-top py-4">
            <div className="navbar navbar-expand-lg container navbar-light">

                <a className="navbar-brand nombre-sitio d-lg-none fs-2 fw-bold text-uppercase" href="/">Tienda Muebles</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegacion">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navegacion" className="collapse navbar-collapse">
                    <nav className="navbar-nav container d-flex flex-md-row justify-content-md-between text-center">
                        <a className="text-dark text-decoration-none" href="/">Inicio</a>
                        <a className="text-dark text-decoration-none" href="/">Nosotros</a>
                        <a className="text-dark text-decoration-none" href="/">Tienda</a>
                        <a className="text-dark text-decoration-none" href="/">Blog</a>
                        <a className="text-dark text-decoration-none" href="/">Galería</a>
                        <a className="text-dark text-decoration-none" href="/">Contacto</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navss