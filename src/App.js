
import './App.scss';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from './pages/Home';
import { Category } from './pages/Category';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path = {"/"} element={<Home/>} />
        <Route path = {"/categoria/:categoriaId"} element={<Category/>} />
        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
