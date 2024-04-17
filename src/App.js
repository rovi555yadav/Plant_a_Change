import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Mains from './components/Mains';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router> {/* Wrap your components with Router */}
      <>
        <Mains/>
        
      </>
    </Router>
  );
}

export default App;
