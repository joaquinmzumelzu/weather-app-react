
import { Route } from 'react-router-dom';
import Componente2 from './components/Componente2';
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
      <Route exact path = '/'>
        <NavBar/>
      </Route>
      
      <Route path = '/componente2'>
        <Componente2/>
      </Route>
      
      
   
    </div>
  );
}

export default App;
