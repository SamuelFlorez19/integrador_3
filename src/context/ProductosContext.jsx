import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";


const ProductosContext = createContext();
const ProductosProvider = ( {children} ) => {

    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {
        try {
            const prods =  await helperPeticionesHttp(url, null)
            setProductos(prods)
            
        } catch (error) {
            console.error([getAllProductos], error)
        }
    }

    const crearProductoContext = async (nuevoProducto) => {

        try {
            const options = {
                method: 'POST',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(nuevoProducto)
            }
    
            const newProducto = await helperPeticionesHttp(url, options)
            
    
            setProductos([...productos, newProducto])

        } catch (error) {
            console.error('[crearProductoContext]', error)
        }
        
    }

    const actualizarProductosContext = async (productoEditado) => {
        
        try {

            const options = {
                method : 'PUT',
                headers :  { 'content-type' : 'application/json' },
                body : JSON.stringify(productoEditado)
            }

            const urlEdicion = url + productoEditado.id


            const editedProduct = await helperPeticionesHttp(urlEdicion, options)
            
            const nuevoEstadoProductos = productos.map(producto => producto.id === editedProduct.id ? editedProduct : producto)
            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[actualizarProductosContext]', error)
        }
    }

    const eliminarProductoContext = async (id) => {
        try {
            const urlEliminacion = url + id
            const options = {
                method: 'DELETE'
            }

            const dataEliminado = await helperPeticionesHttp(urlEliminacion, options)
            
            
            const data = {
                id: id,
                producto: dataEliminado
            }
            const nuevoEstadoProductos = productos.filter(producto => producto.id !== data.id)
            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[eliminarProductoContext]', error);
            
        }
    }

    const data = {
        productos,
        crearProductoContext,
        actualizarProductosContext,
        productoAEditar,
        setProductoAEditar,
        eliminarProductoContext
    }
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}
export {ProductosProvider}
export default ProductosContext