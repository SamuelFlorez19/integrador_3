import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Alta from "../pages/Alta"
import NoEncontrado from "../pages/NoEncontrado"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import Carrito from "../pages/Carrito"

const Rutas = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Inicio />
        }, 
        {
            path: "/alta",
            element: <Alta />
        }, 
        {
            path: "*",
            element: <NoEncontrado />
        },
        {
            path: "/nosotros",
            element: <Nosotros />
        },
        {
            path: "/contacto",
            element: <Contacto />
        },
        {
            path: "/carrito",
            element: <Carrito />
        }
    ])
    return routes
}
export default Rutas