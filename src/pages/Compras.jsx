import { useCartContext } from "../context/cartContext";
import { BsTrash } from "react-icons/bs";
import { Button } from "../components/Button";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { Link} from "react-router-dom";


export const Compras = () => {
    const { cart, removeProduct, total, emptyCart } = useCartContext();
    const alerta = () => {
        swal("¿Estas seguro que deseas cancelar la compra?", {
            buttons: {
                cancelar: {
                    text: "cancelar",
                    value: "cancelar",
                    dangerMode: true,
                },
                volver: {
                    text: "Volver",
                    value: "volver",
                },
            },
        }).then((value) => {
            switch (value) {
                case "cancelar":
                    emptyCart();
                    break;

                case "volver":
                    break;

                default:
            }
        });
    };

    if (!Object.keys(cart).length) {
        return (
            <div className="notfound2">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>
                            <span></span>
                        </h1>
                    </div>
                    <h1> </h1>
                    <h2>Parece que tu carrito aún esta vacio</h2>
                    <p>
                        Vuelve a la tienda y empieza a modernizarte con el mejor
                        equipamiento
                    </p>
                    <NavLink to={`/ `}>
                        <span className="VolverTienda">Vovler a la Tienda</span>
                    </NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="carritoList">
            {cart.map((props) => {
                return (
                    <div key={props.id} className="tiendaBox">
                        <img className="imgProdTienda" src={props.imagen} alt="" />
                        <h2 className="nombreItem">{props.nombre}</h2>
                        <h3 className="nombreItem">${props.precio}</h3>
                        <h3 className="nombreItem">{props.cantidad}</h3>

                        <Button
                            className="buttonEliminar"
                            onClick={() => removeProduct(props.id)}
                        >
                            <BsTrash size={20} />{" "}
                        </Button>
                    </div>
                );
            })}

            <div className="total">
                <div>
                    <h3>
                    Precio Total
                        </h3>
                </div>
                <div>
                    <h3>
                    ${total()}
                    </h3>
                </div>
            </div>

            <div className="finCompra">
                <Button
                    clase={"vaciarCarrito"}
                    onClick={() => {
                        alerta();
                    }}
                >
                    <h3>Vaciar carrito</h3>
                </Button>
                
                <Link  style={{ textDecoration: 'none' }} to="/checkout">
                
                <Button clase={"vaciarCarrito2"} > 
                
                <h3>Finalizar Compra</h3>
                    </Button>
                </Link>
            </div>
        </div>
    );
};
