import { useContext } from "react";
import './ListadoCarrito.scss'
import carritoContext from "../context/CarritoContext";
import ItemCarrito from "./ItemCarrito";

const ListadoCarrito = () => {
  const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(carritoContext);
  
  const handleComprar = () => {
    guardarCarritoContext()
    console.log("comprando");
    
  }

  const handleLimpiarCarrito = () => {
    console.log("vaciando carrito");
    
    limpiarCarritoContext()
  }

  return (
    <>
      <table className="tabla-alta">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {carrito.length <= 0 ? (
          <tr>
            <td colSpan={5}>No hay productos</td>
          </tr>
        ) : (
          carrito.map((producto, idx) => (
            <ItemCarrito key={idx} producto={producto} />
          ))
        )}
        
      </tbody>
    </table>
    
    <div className="btn-comprar">
      { !carrito.length <= 0 && (
        <>
          <button className="search-bar__button" onClick={handleComprar}>Comprar</button>
          <button className="search-bar__button" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
        </>
        
      )
    }
    </div>
    </>
  );
};

export default ListadoCarrito;
