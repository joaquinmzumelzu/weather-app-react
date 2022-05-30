
import { Route } from 'react-router-dom';
import Componente2 from './components/Componente2';
import Home from './components/Home';

function App() {
  return (
    <div >
      <Route exact path = '/'>
        <Home/>
      </Route>
      
      <Route path = '/componente2'>
        <Componente2/>
      </Route>
      
      
   
    </div>
  );
}

export default App;
