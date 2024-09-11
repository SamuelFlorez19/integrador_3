import { useContext, useEffect, useState } from 'react';
import './Formulario.scss'
import ProductosContext from '../context/ProductosContext';

const Formulario = () => {

    const formInit ={
        id: null,
        nombre: '',
        precio: '',
        stock:'',
        categoria: '',
        descripcion: '',
        foto: '',
        envio:''
    }
    const [form, setForm] = useState(formInit)
    const {crearProductoContext, actualizarProductosContext, productoAEditar, setProductoAEditar} = useContext(ProductosContext)

    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInit)
    }, [productoAEditar])
    



    const handleSubmit = async e => {
        e.preventDefault()
        console.log('handle submit')

        try {
            
            
            if (form.id === null) {
                
                await crearProductoContext(form)
            } else {
                
                await actualizarProductosContext(form)
            }
            handleReset()

        } catch (error) {
            console.error('[ handleSubmit ]', error);
            
        }
    }

    const handleChange = e => {
        const { name, value} = e.target
        setForm({...form, 
            [name]: value})
    }

    const handleReset = () => {
        
        setForm(formInit)
        setProductoAEditar(formInit)
        
    }



    return (
        <form onSubmit={handleSubmit} className="form">
        <p className="title">Guardar productos</p>
        <p className="message">Crea tu producto</p>
        <div className="flex">
            <label htmlFor='lbl-nombre'>
            <input
                required=""
                placeholder=""
                type="text"
                className="input"
                name="nombre"
                id='lbl-nombre'
                value={form.nombre}
                onChange={handleChange}
            />
            <span>Nombre</span>
            </label> 
            <label htmlFor='lbl-precio'>
            <input
                required=""
                placeholder=""
                type="text"
                className="input"
                name="precio"
                id='lbl-precio'
                value={form.precio}
                onChange={handleChange}
            />
            <span>Precio</span>
            </label>
        </div>
        <label htmlFor='lbl-stock'>
            <input
                required=""
                placeholder=""
                type="text"
                className="input"
                name="stock"
                id='lbl-stock'
                value={form.stock}
                onChange={handleChange}
            />
            <span>Stock</span>
        </label>
        <label htmlFor='lbl-categoria'>
            <input 
                type="text" 
                className="input" 
                name="categoria" 
                id='lbl-categoria' 
                value={form.categoria} 
                onChange={handleChange}/>
            <span>Categoría</span>
        </label>
        <label htmlFor='lbl-description'>
            <input 
                type="text" 
                className="input" 
                name="descripcion" 
                id='lbl-description' 
                value={form.descripcion} 
                onChange={handleChange}/>
            <span>Descripción</span>
        </label>
        <label htmlFor='lbl-foto'>
            <input
                required=""
                placeholder=""
                type="text"
                className="input"
                name="foto"
                id='lbl-foto'
                value={form.foto}
                onChange={handleChange}
            />
            <span>Foto</span>
        </label>
        <label htmlFor='lbl-envio'>
            <input
                required=""
                placeholder="SI O NO"
                type="text"
                className="input"
                name="envio"
                id='lbl-envio'
                value={form.envio}
                onChange={handleChange}
            />
            <span>Envío</span>
        </label>
        <button type='submit' className="search-bar__button">Guardar</button>
        <button type='reset' className="search-bar__button" onClick={handleReset}>Limpiar</button>
        </form>
    );
};

export default Formulario;
