
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Homepage from './Componants/Homepage';
import Cart from './Componants/Cart';
import NavBar from './Componants/NavBar'
function App() {
  return (
    
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
