
import ItemListContainer from '../components/ItemListContainer';




export const Home =  () => {
    return (
        <div className="App">
                <div className='homeLanding'>
                    <div>
                        <h1 className='homeText'>Arma tu setUp ideal</h1>
                    </div>
                </div>
      
        { <ItemListContainer /> }
      
      
    </div>
    )
}