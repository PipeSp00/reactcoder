
import logo from "../multimedia/logo.png"
import {Link, NavLink} from "react-router-dom"
import Cart from './Cart'
export const Navbar = () => {

const links = [
    {to "/", label: "HOME" }
    {to "/", label: "LUZ" }
    {to "/", label: "HOME" }
    {to "/", label: "HOME" }
]
    return  <header className="header"> 

    <div>
    <img src={logo} className="logo" alt="logo" />
    </div>
    <nav className="navMenu">
    
        <a href="#">HOME</a>
        <a href="#">LUZ</a>
        <a href="#">AUDIO</a>
        <a href="#">DESK</a>
        <a href="#">CONTACTO</a>

    <div className="dot"></div>
    </nav>
    

    <Cart />
    

</header>

}

