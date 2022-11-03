import { useState } from "react"
import { useEffect } from "react"
import {Button} from "./Button"
import { getProducts } from "./api/productos"
import {useParams} from 'react-router-dom'

export const Item = () => {

    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()
    console.log(categoriaId)
    useEffect (()=>{
        getProducts(categoriaId)
        .then(data => setProductos(data))
        
        
        
    },[categoriaId])

    return (
        
        
        productos.map(({id, nombre, categoria, precio, stock, imagen}) => (

            <div className="itemTienda" key={id} >
                <div className="contentBox">
                    <div className="imgBox" >
                        <img className="imgProd" src={imagen} alt="" />
                    </div>
                <div className="itemInfo">
                <h2 className="nombreItem">{nombre}</h2>
                <h3 className="nombreItem">{precio}</h3>
                </div>
                <div>
                <Button onClick={(onclick)} content={("Añadir a carrito")} className ="comprar">
                    
                </Button>
                </div> 
               </div>                
            </div>      
           
           

           
        
    
    ) 
    )
    )
}