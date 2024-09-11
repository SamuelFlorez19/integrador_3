import React, { useContext } from 'react'
import carritoContext from '../context/CarritoContext'

const ItemCarrito = ({ producto }) => {

    console.log(producto);
    

    const { eliminarProductoAlCarritoContext } = useContext(carritoContext)

    const handleEliminnar = (id) => {
        console.log('Eliminando el producto', id);
        
        eliminarProductoAlCarritoContext(id)
    }

    return (
        <tr>
            <td>
                <img src={producto.foto} alt={producto.nombre} width='90px' />
            </td>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.precio}</td>
            <td>
                <button className='search-bar__button' onClick={() => handleEliminnar(producto.id)}>Eliminar</button>
            </td>
        </tr>
    )
    }

export default ItemCarrito