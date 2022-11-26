
import { useState } from "react"

import { ButtonDetalle } from "./ButtonDetalle";



export const Counter = ({onAdd}) => {

    
        const [contador, setContador] = useState(0);
      
        const agregarCarrito = () => {
          setContador(contador + 1);
          
        };

        const restarCarrito = () => 
        {
          if (contador > 0 ) setContador(contador - 1)
          
          
        }


        return (

          <div className="agregarProductos">
            <div className="botones" >
      <ButtonDetalle  className="buttonDetalle" onClick={agregarCarrito}  > AGREGAR</ButtonDetalle>
      <span className="contadordisplay">{contador}</span>
      <ButtonDetalle  className="buttonDetalle" onClick={restarCarrito} > SACAR </ButtonDetalle>
      </div>
      <div>
      <ButtonDetalle onClick={()=> {
        if (contador) {
         onAdd(contador)
        
        } 

      } }> asassa</ButtonDetalle>
      
   
      
      
    </div>
    </div>
        )


} 