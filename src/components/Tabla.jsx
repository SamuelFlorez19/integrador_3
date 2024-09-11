
import './Tabla.scss'
import TablaFila from './TablaFila'
import ProductosContext from '../context/ProductosContext'
import { useContext } from 'react'

const Tabla = () => {
    const { productos } = useContext(ProductosContext)
    return (
        <div className='tabla-container'>
        
            <table className='tabla-alta'> 
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoria</th>
                    <th>Detalles</th>
                    <th>Foto</th>
                    <th>Envio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {
                productos && productos.map( producto => (
                    <TablaFila key={producto.id} producto={producto} />
                ))
            }
            </tbody>



            </table>
        </div>

    )
}

export default Tabla