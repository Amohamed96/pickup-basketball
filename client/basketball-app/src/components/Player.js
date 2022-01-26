import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../pages/Profile/Profile.css";
import ChallengeForm from "../components/ChallengeForm";
import { Menu as SemanticMenu, Button, Segment, Icon } from "semantic-ui-react";
import { Link as Scroll } from "react-scroll";

export default function Player() {
  const [player, setPlayer] = useState("");
  const [location, setLocation] = useState("");
  const [check, setCheck] = useState(false);
  const [matchesTeam, setMatchesTeam] = useState([]);
  const [matchesPlayer, setMatchesPlayer] = useState([]);

  const { id } = useParams();
  console.log("ID FROM PLAYER >>>", id);

  // const grabUser = () => {

  // }
  useEffect(() => {
    if (check) {
      return;
    }
    setCheck(true);

    axios.get("http://localhost:3000/api/home").then((res) => {
      setMatchesTeam(res.data.matchesTeam);
      setMatchesPlayer(res.data.matchesPlayer);
      console.log("HOME RES DATA----->", res.data);
    });
  });

  const totalUserWins = function (player) {
    let userWins = 0;
    matchesPlayer.map((match) => {
      if (player.id === match.winner_id) {
        userWins++;
        console.log("player winner ID", player.id);
        console.log("match winner ID", match.winner_id);
        console.log("user wins", userWins);
      }
    });
    return userWins;
  };

  const totalUserLosses = function (player) {
    let userLosses = 0;
    matchesPlayer.map((match) => {
      if (
        (player.id !== match.winner_id && player.id === match.player1_id) ||
        player.id === match.player2_id
      ) {
        userLosses++;
      }
    });
    return userLosses;
  };

  useEffect(() => {
    axios
      .get(`/api/users/player/${id}`)
      .then((results) => {
        console.log("RES PLAYER!", results.data.users);
        setPlayer(results.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (check) {
      return;
    }
    setCheck(true);

    axios.get("http://localhost:3000/api/location").then((res) => {
      setLocation(res.data);
      console.log("PLAYER RES LOCATION----->", res.data);
    });
  });

  return (
    <>
      <Navbar />

      <Segment className="profile-segment">
        <div className="avatar-container">
          <img className="profile-pic" src={player.avatar} />
          <h2 className="userName">{player.name}</h2>
        </div>
        <div className="middle-column">
          <h1 className="description">
            <em>"{player.bio}"</em>
          </h1>
          <div className="challenge-button">
            <Scroll to="profile-challenges" smooth={true}>
              <Button inverted color="orange">
                Challenges
              </Button>
            </Scroll>
          </div>
        </div>

        <div className="record">
          <strong>
            <u>User Record:</u>
          </strong>
          <div className="player-record">
            <p>
              Wins: {totalUserWins(player)} <br />
              Losses: {totalUserLosses(player)}
            </p>
          </div>
        </div>
      </Segment>
      <div class="ch-vid">
        <ChallengeForm player={player} location={location} />

        <div className="vid">
          <iframe
            width="550"
            height="400"
            src="https://www.youtube.com/embed/yuHbkUoT5oE?autoplay=1&mute=1"
          ></iframe>
        </div>
      </div>
    </>
  );
}
