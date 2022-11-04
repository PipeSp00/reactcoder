
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"
export const Item = (props) => {

 
    const navegar = useNavigate()
    return (
    

            <div className="itemTienda" onClick={() => navegar(`/producto/${props.id}`)} >
                <div className="contentBox">
                    <div className="imgBox" >
                        <img className="imgProd" src={props.imagen} alt="" />
                    </div>
                <div className="itemInfo">
                <h2 className="nombreItem">{props.nombre}</h2>
                <h3 className="nombreItem">${props.precio}</h3>
                </div>
        
               </div>   

               <Button onClick={(onclick)} content={("Añadir a carrito")} className ="comprar">
                    
                </Button>             
            </div>      
           
           

           
        
    
    ) 
}