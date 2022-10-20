
import logo from "../multimedia/logo.png"
import Cart from './Cart'
const Navbar = () => {

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

export default Navbar