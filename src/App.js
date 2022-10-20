
import './App.scss';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {
  return (

    
    <div className="App">
      <NavBar /> 
      <ItemListContainer greetings = "Bienvenido a la tienda online Ordesk" />
    </div>
  );
}

export default App;
