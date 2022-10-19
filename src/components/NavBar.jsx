import { BsCart } from "react-icons/bs";
import { IconContext } from "react-icons";




const Navbar = () => {
    return  <header className="header"> 

    <div className="logo">
        <img src="" alt="" />
    </div>
    <nav className="navMenu">
        <a href="#">HOME</a>
        <a href="#">LUZ</a>
        <a href="#">AUDIO</a>
        <a href="#">DESK</a>
        <a href="#">CONTACTO</a>
    <div className="dot"></div>
    </nav>
    
    <div> 
    <BsCart size={25} className="cart"/>
    </div>

</header>
}

export default Navbar