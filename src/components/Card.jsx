import { useContext } from 'react';
import './Card.scss'
import carritoContext from '../context/CarritoContext';

const Card = ({producto}) => {

    const { agregarProductoAlCarritoContext } = useContext(carritoContext)


    const handleAgregar = () => {
        console.log('Agregando producto al carrrito');
        agregarProductoAlCarritoContext(producto)
        
    }

    return (
        <div className="card">
        <article className="card__article">
            <div className="img card__image-container">
            <img
                src={producto.foto}
                alt={producto.nombre}
                className="img card__image"
            />
            </div>
            <div className="card__content">
            <h2 className="card__heading">{producto.nombre}</h2>
            <div className="card__description">
                <p>{producto.descripcion}</p>
            </div>
            <div className="card__footer">
                <span className="card__heading">{producto.precio}</span>
                <button className='search-bar__button' onClick={() => handleAgregar(producto)}>Agregar</button>
            </div>
            </div>
        </article>
        </div>
    );
};

export default Card;
