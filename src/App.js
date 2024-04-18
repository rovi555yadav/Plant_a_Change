import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter
import Mains from './components/Mains';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element=<Mains /> exact />
      </Routes>
    </Router>
  );
}

export default App;
