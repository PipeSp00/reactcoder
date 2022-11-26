import logo from "../multimedia/logo.png";
import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart";
import { useCartContext } from "../context/cartContext";


const links = ["Luz", "Audio", "Desk", "Domotica"];
export const Navbar = () => {
    const {cart} = useCartContext ()
    console.log ({cart})
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>

            <nav className="navMenu">
                {links.map((categ) => {
                    return (
                        <NavLink
                            className="link"
                            to={`/categoria/${categ.toLowerCase()} `}
                            key={categ}
                        >
                            {categ}
                        </NavLink>
                    );
                })}

                <div className="dot"></div>
            </nav>
            <Link to="/carrito"><Cart/>
           <h1> {cart.length}
            </h1>

        
            </Link>

            
        </header>
    );
};
