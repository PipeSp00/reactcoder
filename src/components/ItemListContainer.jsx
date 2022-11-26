import { Item}  from "./Item"
import { useState } from "react"
import { useEffect } from "react"
import { getProducts } from "./api/productos"
import {useParams} from 'react-router-dom'



const ItemListContainer = () => {


const [productos, setProductos] = useState([])
const {categoriaId} = useParams()

useEffect (()=>{
    getProducts(categoriaId)
    .then(data => setProductos(data))
    
    
    
},[categoriaId])


    return (

        <div className="itemList">

        {productos.map((producto) => {
            return (
                
                <Item 
                id={producto.id}
                key={producto.id}
                nombre = {producto.nombre}
                precio = {producto.precio} 
                imagen ={producto.imagen}      
                 />
                
            )
            }
        )}
        </div>
            
    )
}


export default ItemListContainer