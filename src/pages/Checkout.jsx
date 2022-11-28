
import { useCartContext } from "../context/cartContext";


export const Checkout =  () => {
    const {emptyCart } = useCartContext();
    return (
        <div className="checkoutContainer">

            <h2>Finalizar compra</h2>
            <form className="checkout" action="
            ">
                
                    <input className="forms" type="text" placeholder='Nombre' />
                    <input className="forms" type="text" placeholder='Apellido' />
                    <input className="forms" type="email" placeholder='Correo' />
                    <input className="forms" type="tel" placeholder='Nombre' />
                    
               

               <button onClick={emptyCart} type='submit' className='botonComprar'> Comprar</button>
            </form>
    </div>
    )
}

