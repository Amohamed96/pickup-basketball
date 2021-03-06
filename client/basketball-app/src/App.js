import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register.js";
import Profile from "./pages/Profile/Profile.js";
import Navbar from "./components/Header/Navbar";
import Messages from "./pages/messages/Messages";
import Player from "./pages/Profile/Player";
import MatchesTeam from "./pages/Matches/MatchesTeam";
import MatchesPlayer from "./pages/Matches/MatchesPlayer";
import ScrollToTop from "./components/Helpers/ScrollToTop";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Navbar user={user} />
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/register" exact render={() => <Register />} />
            <Route path="/login" exact render={() => <Login />} />
            <Route path="/profile" exact render={() => <Profile />} />
            <Route path="/player/:id" render={() => <Player />} />
            <Route path="/messages" render={() => <Messages />} />
            <Route path="/matches-player" render={() => <MatchesPlayer />} />
            <Route path="/matches-team" render={() => <MatchesTeam />} />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
