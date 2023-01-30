import image1 from '../img/grid/sillon.jpg'
import image2 from '../img/grid/pantalla.jpg'
import image3 from '../img/grid/sala.jpg'
import image4 from '../img/grid/comedor.jpg'
import image5 from '../img/grid/cama.jpg'
import image6 from '../img/grid/bancas.jpg'
const Grid = () => {
    return (
        <main className="container-xl py-5">
            <h2 className="text-center my-5">Nuestros Productos</h2>

            {/* La separacion de g-o se le conoce como gotter */}
            <div className="row g-0 pt-5 mb-4">
                <div className="col-md-8 producto">
                        <img className='img-fluid' src={image1} alt="producto uno" />
                </div>
                <div className="col-md-4 bg-primary text-center p-5 text-white d-flex flex-column justify-content-center">
                    <h3>Producto 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel deleniti, ea quibusdam autem consequuntur, beatae quas atque neque nihil porro magni perferendis officiis officia aliquid maxime eveniet corporis. Maiores, ullam!</p>
                    <p className="fs-1 fw-bold">$1,000,000</p>
                    <a className="btn btn-success fs-3 fw-bold text-uppercase py-3" href="/">Agregar al carrito</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <img src={image2} alt="imgen producto" />
                        <div className='card-body text-center bg-primary text-white p-5'>
                            <h3>Producto 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel deleniti, ea quibusdam autem consequuntur, beatae quas atque neque nihil porro magni perferendis officiis officia aliquid maxime eveniet corporis. Maiores, ullam!</p>
                            <p className="fs-1 fw-bold">$1,200</p>
                            <a className="btn btn-success fs-3 fw-bold text-uppercase py-3" href="/">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <img src={image3} alt="producto 3" />
                        <div className='card-body text-center bg-primary text-white p-5'>
                            <h3>Producto 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel deleniti, ea quibusdam autem consequuntur, beatae quas atque neque nihil porro magni perferendis officiis officia aliquid maxime eveniet corporis. Maiores, ullam!</p>
                            <p className="fs-1 fw-bold">1,532</p>
                            <a href="/" className="btn btn-success fs-3 fw-bold text-uppercase py-3">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                <div className="card">
                        <img src={image4} alt="imgen producto" />
                        <div className='card-body text-center bg-primary text-white p-5'>
                            <h3>Producto 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel deleniti, ea quibusdam autem consequuntur, beatae quas atque neque nihil porro magni perferendis officiis officia aliquid maxime eveniet corporis. Maiores, ullam!</p>
                            <p className="fs-1 fw-bold">$4.666</p>
                            <a className="btn btn-success fs-3 fw-bold text-uppercase py-3" href="/">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card">
                        <img src={image5} alt="imgen producto" />
                        <div className='card-body text-center bg-primary text-white p-5'>
                            <h3>Producto 5</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel deleniti, ea quibusdam autem consequuntur, beatae quas atque neque nihil porro magni perferendis officiis officia aliquid maxime eveniet corporis. Maiores, ullam!</p>
                            <p className="fs-1 fw-bold">$3,999</p>
                            <a className="btn btn-success fs-3 fw-bold text-uppercase py-3" href="/">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <img src={image6} alt="imgen producto" />
                        <div className='card-body text-center bg-primary text-white p-5'>
                            <h3>Producto 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel deleniti, ea quibusdam autem consequuntur, beatae quas atque neque nihil porro magni perferendis officiis officia aliquid maxime eveniet corporis. Maiores, ullam!</p>
                            <p className="fs-1 fw-bold">$1,200</p>
                            <a className="btn btn-success fs-3 fw-bold text-uppercase py-3" href="/">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Grid