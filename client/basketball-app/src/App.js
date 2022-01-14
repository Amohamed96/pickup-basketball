import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Switch>
      <Route path="/" exact render={() => <Home/>}/>
      <Route path="login" exact render={() => <Login/>}/>
      </Switch>
      
    </Router>
  
    </>
  );
}

export default App;
