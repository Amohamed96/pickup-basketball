import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Switch>
      <Route path="/" exact render={() => <Home/>}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
