import { useEffect } from "react"


const useTitulo = (textoTitulo = 'Sin título') => {
    useEffect(() => {
        document.title = `Crown Jewels - ${textoTitulo}`
    }, [])
    
}


export default useTitulo
