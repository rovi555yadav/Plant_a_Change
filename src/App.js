import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import { Home } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element=<Home /> exact />
      </Routes>
    </Router>
  );
}

export default App;
