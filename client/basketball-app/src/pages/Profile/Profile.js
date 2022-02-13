import React, { useEffect, useState } from "react";
import { Menu as SemanticMenu, Button, Segment, Icon } from "semantic-ui-react";
import axios from "axios";
import ChallengesRecieved from "../../components/Challenges/ChallengesRecieved";
import { Link as Scroll } from "react-scroll";
import { TransactionOutlined } from "@ant-design/icons";
import { IoIosBasketball } from "react-icons/io";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState({});
  const currentUser = localStorage.getItem("user");
  const [challenges, setChallenges] = useState([]);
  const [matchesTeam, setMatchesTeam] = useState([]);
  const [matchesPlayer, setMatchesPlayer] = useState([]);
  const [teams, setTeams] = useState([]);
  const [check, setCheck] = useState(false);

  // const handleItemClick = (e, { name }) => {
  //   console.log("NAME", name);
  //   setActiveItem(name);
  // };

  // Promise with local storage and request
  useEffect(() => {
    console.log("CURRENT USER from LOCAL", currentUser);
    console.log(" USER from LOCAL", user);

    setUser(JSON.parse(currentUser));
  }, [currentUser]);

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

  const logout = function () {
    localStorage.clear();
  };

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`/api/users/player/${JSON.parse(currentUser).id}`)
        .then((res) => {
          console.log("PROFILE RES DATA", res.data);
          setChallenges(res.data.challenges);
        });
    }, 500);
  }, []);

  // state = { activeItem: "home" };
  // const [activeItem, setActiveItem] = useState("home");
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  return (
    <>
      <div className="profile-container">
        <Segment className="profile-segment">
          <div className="avatar-container">
            <img className="profile-pic" src={user.avatar} />
            <h2 className="userName">{user.name}</h2>
          </div>
          <div className="middle-column">
            <h1 className="description">
              <em>"{user.bio}"</em>
            </h1>
            <div className="challenge-button button-animated bounce">
              <Scroll to="profile-challenges" smooth={true}>
                <IoIosBasketball className="basketball-icon " />
              </Scroll>
            </div>
          </div>

          <div className="record">
            <strong>
              <u>User Record:</u>
            </strong>
            <div className="player-record">
              <p>
                Wins: {totalUserWins(JSON.parse(currentUser))} <br />
                Losses: {totalUserLosses(JSON.parse(currentUser))}
              </p>
            </div>
          </div>
        </Segment>
        <div className="vid">
          <iframe
            width="550"
            height="400"
            src="https://www.youtube.com/embed/zpZRRaAbdzo?&autoplay=1&mute=1"
            //https://www.youtube.com/embed/P652hhzyRYE?&t=89s&autoplay=1&mute=1
          ></iframe>
        </div>
        <div className="profile-challenges">
          <ChallengesRecieved users={user} challenges={challenges} />
        </div>
        <Scroll to="profile-container" smooth={true}>
          <Button animated="vertical" className="back-to-top">
            <Button.Content visible>Back to top</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow up" />
            </Button.Content>
          </Button>
        </Scroll>
      </div>
    </>
  );
}
//   const [user, setUser] = useState({});
//   console.log("USER>>>>", user);
//   const currentUser = localStorage.getItem("user");
//   const [challenges, setChallenges] = useState([]);
//   // Promise with local storage and request
//   useEffect(() => {
//     console.log("CURRENT USER from LOCAL", currentUser);
//     console.log(" USER from LOCAL", user);

//     setUser(JSON.parse(currentUser));
//   }, [currentUser]);

//   useEffect(() => {
//     setTimeout(() => {
//       axios
//         .get(`/api/users/player/${JSON.parse(currentUser).id}`)
//         .then((res) => {
//           console.log("PROFILE RES DATA", res.data);
//           setChallenges(res.data.challenges);
//         });
//     }, 100);
//   }, []);
//   return (
//     <>
//       <Navbar users={user} />
//       {!user ? (
//         <h1>PLEASE LOGIN ---</h1>
//       ) : (
//         <div class="padding">
//           <div class="col-md-8">
//             <div class="card">
//               {" "}
//               <img
//                 class="card-img-top"
//                 src="https://i.dlpng.com/static/png/5913661-vinyl-basketball-court-photography-children-backdrops-backdrop-for-basketball-court-background-640_436_preview.png"
//                 alt="Card image cap"
//               />
//               <div class="card-body little-profile text-center">
//                 <div class="pro-img">
//                   <img src={user.avatar} alt="user" />
//                 </div>
//                 <h3 class="m-b-0">{user.name}</h3>
//                 <p>{user.bio}</p>
//                 {user === user.name ? (
//                   <a
//                     href="javascript:void(0)"
//                     class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
//                     data-abc="true"
//                   ></a>
//                 ) : (
//                   <></>
//                 )}

//                 <div class="row text-center m-t-20">
//                   <div class="col-lg-4 col-md-4 m-t-20">
//                     <h3 class="m-b-0 font-light">66</h3>
//                     <small>GP</small>
//                   </div>
//                   <div class="col-lg-4 col-md-4 m-t-20">
//                     <h3 class="m-b-0 font-light">43</h3>
//                     <small>Wins</small>
//                   </div>
//                   <div class="col-lg-4 col-md-4 m-t-20">
//                     <h3 class="m-b-0 font-light">23</h3>
//                     <small> Losses</small>
//                   </div>
//                   <div className="vid">
//                     <iframe
//                       width="550"
//                       height="400"
//                       src="https://www.youtube.com/embed/yuHbkUoT5oE?autoplay=1&mute=1"
//                     ></iframe>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ChallengesRecieved users={user} challenges={challenges} />
//         </div>
//       )}
//     </>
//   );
// }
