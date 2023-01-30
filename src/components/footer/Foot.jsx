


const Foot = () => {
    return(
        <footer className="pt-5 mt-5 border-top">
            <div className="container-xl mt-5">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0 text-center">
                        <h3 className="mb-4">Categorias</h3>
                        <nav className="d-flex flex-column">
                            <a className="text-dark text-decoration-none" href="/">Cocina</a>
                            <a className="text-dark text-decoration-none" href="/">Oficina</a>
                            <a className="text-dark text-decoration-none" href="/">Jardin</a>
                            <a className="text-dark text-decoration-none" href="/">Cochera</a>
                            <a className="text-dark text-decoration-none" href="/">Dormitorios</a>
                        </nav>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0 text-center">
                        <h3 className="mb-4">Sobre Nosotros</h3>
                        <nav className="d-flex flex-column">
                            <a className="text-dark text-decoration-none" href="/">Nuestra historia</a>
                            <a className="text-dark text-decoration-none" href="/">Misión, Visión y alores</a>
                            <a className="text-dark text-decoration-none" href="/">Politica de Privacidad</a>
                            <a className="text-dark text-decoration-none" href="/">Carreras</a>
                            <a className="text-dark text-decoration-none" href="/">Términos del Servicio</a>
                        </nav>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0 text-center">
                        <h3 className="mb-4">Soporte</h3>
                        <nav className="d-flex flex-column">
                            <a className="text-dark text-decoration-none" href="/">Preguntas Frecuentes</a>
                            <a className="text-dark text-decoration-none" href="/">Ayuda en Linea</a>
                            <a className="text-dark text-decoration-none" href="/">Confianza y Seguridad</a>
                        </nav>
                    </div>
                </div>
                <p className="text-center mt-5 fs-2">Todos los derechos reservados. TiendaMuebles</p>
            </div>
        </footer>
    )
}

export default Foot;