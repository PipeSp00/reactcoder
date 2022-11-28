
import './App.scss';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detalle } from './pages/Detalle'
import { Compras } from './pages/Compras'
import { Checkout } from './pages/Checkout'
import { Userlayout } from './components/UserLayout';
import {createContext, useContext} from 'react';
import { CartProvider} from './context/cartContext';
import Cart from './components/Cart';



function App() {
  return (
    <div className="App">
      <CartProvider value ={[]}>
      <BrowserRouter>
      <Routes>
        <Route path ={"/"} element={<Userlayout/>}>
          <Route path = {"/"} index element={<Home/>} />
          <Route path = {"/checkout"}element={<Checkout/>} />
          <Route path = {"/categoria/:categoriaId"} element={<Category/>} />
          <Route path = {"/carrito"} element={<Compras/>} />
          <Route path = {"/producto/:productoId"} element={<Detalle/>} />
        </Route>
        
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;
