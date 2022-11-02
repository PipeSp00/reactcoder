import { useState } from "react"
import { useEffect } from "react"
import {Button} from "./Button"
import { getProducts } from "./api/productos"

export const Item = () => {

    const [productos, setProductos] = useState([])

    useEffect (()=>{
        getProducts()
        .then(data => setProductos(data))
        
        
    },[])

    return (
        productos.map(({id, nombre, categoria, precio, stock, img}) => (

            <div className="itemTienda" key={id} >
                <div className="contentBox">
                    <div className="imgBox" >
                        <img className="imgProd" src={img} alt="" />
                    </div>
                <div className="itemInfo">
                <h2 className="nombreItem">{nombre}</h2>
                <h3 className="nombreItem">{precio}</h3>
                </div>
                <div>
                <Button onClick={(onclick)} content={("Añadir a carrito")} className ="comprar">
                    
                </Button>
                </div> 
               </div>                
            </div>

            /*<div class="card">

  <div class="imgBox">
    <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" class="mouse">
  </div>

  <div class="contentBox">
    <h3>Mouse Corsair M65</h3>
    <h2 class="price">61.<small>98</small> €</h2>
    <a href="#" class="buy">Buy Now</a>
  </div>

</div>*/
           
           
           
           
           
        
    
    ) 
    )
    )
}