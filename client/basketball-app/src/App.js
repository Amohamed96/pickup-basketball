import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register.js';
import Profile from './pages/Profile/Profile.js';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Switch>
      <Route path="/" exact render={() => <Home/>}/>
      <Route path="/login" exact render={() => <Login/>}/>
      <Route path="/register" exact render={() => <Register/>}/>
      <Route path="/profile" exact render={() => <Profile/>}/>
      </Switch>
      
    </Router>
  
    </>
  );
}

export default App;
