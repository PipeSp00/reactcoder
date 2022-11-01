import { useEffect } from "react"
import { useState } from "react"
import { Button } from "./Button"


export const ButtonAdd = () => {

    const [productos, setProductos] = useState([])

    useEffect (()=>{
        fetch ("")
        .then (data => setProductos (data))
    },[])

        const [contador, setContador] = useState(0);
      
        const agregarCarrito = () => {
          setContador(contador + 1);
          
        };


        return (
            <div className="grid" >
      <Button onClick={() => agregarCarrito()}> Agregar al carrito </Button>
      <span>{contador}</span>
    </div>
        )


} 