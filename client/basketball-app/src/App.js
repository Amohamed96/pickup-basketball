import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact render={() => <Home/>}/>
      </Switch>
    </Router>
  );
}

export default App;
