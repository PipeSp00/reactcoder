import "../App.scss";
import { Userlayout } from "../components/UserLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getInfo } from "../components/api/productos";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Counter } from "../components/Counter";
import { useCartContext } from "../context/cartContext";

export const Detalle = () => {
    const { addProduct } = useCartContext();

    const [producto, setProducto] = useState([]);
    const { productoId } = useParams();
    useEffect(() => {
        getInfo(productoId).then((data) => setProducto(data));
    }, [productoId]);

    const handleAdd = (cantidad) => {
        addProduct(producto, cantidad);
    };

    if (!Object.keys(producto).length) {
        return (
            <div class="spinner-wrapper">
                <div class="spinner">
                    <div class="sk-folding-cube">
                        <div class="sk-cube1 sk-cube"></div>
                        <div class="sk-cube2 sk-cube"></div>
                        <div class="sk-cube4 sk-cube"></div>
                        <div class="sk-cube3 sk-cube"></div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="detalleContent">
            <img className="detalleImg" src={producto.imagen} alt="" />
            <div className="detalleInfo">
                <h2>{producto.nombre}</h2>
                <h3>{producto.descripcion}</h3>

                <div>
                    <h3 className="detallePrecio">${producto.precio}</h3>
                </div>
                <NavLink to={`/ `}>
                    <span className="backLink">Volver</span>
                </NavLink>
                <div>
                    <Counter onAdd={handleAdd} />
                </div>
                
            </div>
        </div>
    );
};
