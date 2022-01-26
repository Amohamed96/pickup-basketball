import React, { useEffect, useState } from "react";
import { Menu as SemanticMenu, Segment } from "semantic-ui-react";
import axios from "axios";
import Menu from "../../components/Menu/Menu";

export default function Profile() {
  const [user, setUser] = useState({});
  console.log("USER>>>>", user);
  const currentUser = localStorage.getItem("user");
  const [challenges, setChallenges] = useState([]);

  // const handleItemClick = (e, { name }) => {
  //   console.log("NAME", name);
  //   setActiveItem(name);
  // };

  const logout = function () {
    localStorage.clear();
  };
  // Promise with local storage and request
  useEffect(() => {
    console.log("CURRENT USER from LOCAL", currentUser);
    console.log(" USER from LOCAL", user);

    setUser(JSON.parse(currentUser));
  }, [currentUser]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`/api/users/player/${JSON.parse(currentUser).id}`)
        .then((res) => {
          console.log("PROFILE RES DATA", res.data);
          setChallenges(res.data.challenges);
        });
    }, 100);
  }, []);

  // state = { activeItem: "home" };
  // const [activeItem, setActiveItem] = useState("home");
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  return (
    <div className="profile-container">
      <Menu user={user} logout={logout} />
      <Segment className="profile-segment">
        <img className="profile-pic" src={user.avatar} />
      </Segment>
    </div>
  );
}
