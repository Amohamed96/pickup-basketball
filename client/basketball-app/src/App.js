import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register.js";
import Profile from "./pages/Profile/Profile.js";
import Navbar from "./components/Navbar";
import Messages from "./pages/messages/Messages";
import Player from "./components/Player";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/profile" exact render={() => <Profile />} />
        <Route path="/player/:id" render={() => <Player />} />
        <Route path="/messages" exact render={() => <Messages />} />
      </Switch>
    </Router>
  );
}

export default App;
