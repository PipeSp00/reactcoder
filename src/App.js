
import './App.scss';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detalle } from './pages/Detalle'
import { Userlayout } from './components/UserLayout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ={"/"} element={<Userlayout/>}>
          <Route path = {"/"} index element={<Home/>} />
          <Route path = {"/categoria/:categoriaId"} element={<Category/>} />
          <Route path = {"/producto/:productoId"} element={<Detalle/>} />
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
