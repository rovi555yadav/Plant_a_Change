import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import { Home } from './pages';
import Landing from './pages/Landing';
import FloraMarket from './pages/FloraMarket';
import GreenSpace from './pages/GreenSpace';
import PlantHub from './pages/PlantHub';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element=<Landing /> exact />
        <Route path='/home' element=<Home/> exact/>
        <Route path='/flormarket' element=<FloraMarket/> exact/>
        <Route path='/greenspace' element=<GreenSpace/> exact/>
        <Route path='/planthub' element=<PlantHub/> exact/>
      </Routes>
    </Router>
  );
}

export default App;
