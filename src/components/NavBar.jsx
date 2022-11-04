
import logo from "../multimedia/logo.png"
import {Link, NavLink} from "react-router-dom"
import Cart from './Cart'
export const Navbar = () => {
    
    const links = ["Luz", "Audio", "Desk", "Domotica"]
    return (<header className="header"> 

    <Link to ='/'><img src={logo} className="logo" alt="logo" /></Link>
    
    

    <nav className="navMenu">

    {links.map((categ) => {

        return (<NavLink className="link" to={`/categoria/${categ.toLowerCase()} `} key={categ}> 
        {categ}

        </NavLink>)
    })}
        


    <div className="dot"></div>
    </nav>
    

    <Cart />
    

</header>)

}

