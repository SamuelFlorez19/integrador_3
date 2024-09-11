import React, { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ({producto}) => {

    const { setProductoAEditar, eliminarProductoContext } = useContext(ProductosContext)

    const handleEditar = (producto) => {
        
        setProductoAEditar(producto)
    }

    const handleEliminar = () => {
        eliminarProductoContext(producto.id)
    }
    
    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.categoria}</td>
            <td>{producto.descripcion}</td>
            <td>
                <img className='img-row' src={producto.foto} alt={producto.nombre} />
            </td>
            <td>{producto.envio ? 'SI' : 'NO'}</td>
            <td>
                <button className="search-bar__button" onClick={() => handleEditar(producto)}>Editar</button>
                <button className="search-bar__button" onClick={handleEliminar}>Borrar</button>
            </td>
        </tr>



        
    )
}

export default TablaFila