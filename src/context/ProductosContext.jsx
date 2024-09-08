import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";


const ProductosContext = createContext();
const ProductosProvider = ( {children}) => {

    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {
        try {
            const prods =  await helperPeticionesHttp(url, null)
            console.log(prods);
            
        } catch (error) {
            console.error([getAllProductos], error)
        }
    }



    const data = {

    }
    return <ProductosContext.Provider vallue={data}>{children}</ProductosContext.Provider>
}
export {ProductosProvider}
export default ProductosContext