import { ButtonDetalle } from "../components/ButtonDetalle"
import { useCartContext } from "../context/cartContext"

export const Compras = () => {
    
    const {cart, removeProduct} = useCartContext ()
    
    return (

        <div className="itemList">

        {cart.map((props) => {
            return (
                
                <div className="contentBox">
                    <div className="imgBox" >
                        <img className="imgProd" src={props.imagen} alt="" />
                    </div>
                <div className="itemInfo">
                <h2 className="nombreItem">{props.nombre}</h2>
                <h3 className="nombreItem">${props.precio}</h3>
                <h3 className="nombreItem">{props.cantidad}</h3>
                </div>
                <ButtonDetalle className="buttonDetalle" onClick={removeProduct (props.id)} > SACAR </ButtonDetalle>
                </div>

                
                
                
                
            )
            }
        )}
        </div>
            
    )
            
    
        
    }

    