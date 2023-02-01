import oficina from '../img/categoria/oficina.jpg'
import cocina from '../img/categoria/cocina.jpg'
import hogar from '../img/categoria/hogar.jpg'

const Categorias = () => {
    return(
        <div className="container-xl ">
            <h2 className="text-center mb-5">
                Categorias de Productos
            </h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card border-0">
                        <img src={oficina} alt="Oficina" />
                        <h3 className='text-center  bg-primary text-white pt-3'>Oficina</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0">
                        <img src={cocina} alt="Oficina" />
                        <h3 className='text-center  bg-primary text-white pt-3'>Cocina</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0">
                        <img src={hogar} alt="Oficina" />
                        <h3 className=' text-center bg-primary text-white pt-3'>Hogar</h3>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Categorias;