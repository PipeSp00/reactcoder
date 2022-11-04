import { Navbar } from "./NavBar"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"

export const Userlayout = () => {

    return (
        <div>
            <Navbar/>
                 <Outlet/>
            <Footer/>
        </div>
    )
    
}