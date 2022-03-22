import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

import {BrowserRouter,  Routes , Route, Link} from 'react-router-dom';
import Stores from './containers/Stores';
import Home from './containers/Home';


function App() {
  return (
    <div className="App container">

      <BrowserRouter>
        
      <Routes>
        <Route exact path="/" element={<Home/>}/> 
        <Route exact path="/stores" element={<Stores/>}/> 
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
