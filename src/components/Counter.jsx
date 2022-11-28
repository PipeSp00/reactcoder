
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { ButtonDetalle } from "./ButtonDetalle";



export const Counter = ({onAdd}) => {

         const notify = () => toast("Se agrego el producto al carrito!");
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
      <ButtonDetalle onClick={agregarCarrito}  > +</ButtonDetalle>
      <span className="contadordisplay"><h3>
      {contador}
        </h3></span>
      <ButtonDetalle  className="buttonDetalle" onClick={restarCarrito} >- </ButtonDetalle>
      </div>
      <div>
      <ButtonDetalle onClick={()=> {
        if (contador) {
         onAdd(contador)
         setContador(contador * 0)
         notify ()
        } 

      } }>  <ToastContainer /> Agregar al carrito</ButtonDetalle>
      
     
      
      
    </div>
    </div>
        )


} 