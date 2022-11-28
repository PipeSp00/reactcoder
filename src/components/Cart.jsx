import { BsCart } from "react-icons/bs";
import { useCartContext } from "../context/cartContext";
const Cart = () => {
    const { cart } = useCartContext();
    console.log({ cart });

    return (
        <div className="cartDiv">
            <BsCart size={40} className="cart" />
            <div className="carritoBg">
                <h2 className="carritoCant"> {cart.length}</h2>
            </div>
        </div>
    );
};

export default Cart;
