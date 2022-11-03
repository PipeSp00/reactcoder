import { Navbar } from "./NavBar"
import { Footer } from "./Footer"


export const Userlayout = ({ children }) => {

    return (
        <div>
            <Navbar/>
                { children }
            <Footer/>
        </div>
    )
    
}