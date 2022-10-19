import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return  <header className="header"> 
    <div className="header__nav"><h3>Home</h3><h3>Bases</h3><h3>Soportes</h3><h3>Iluminación</h3><h3>Audio</h3></div>
    <div className="carrito"><IoCartOutline /> </div>
    </header>
}
export default Navbar