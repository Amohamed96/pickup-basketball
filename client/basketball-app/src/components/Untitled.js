import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import Navbar from "../../components/Navbar";
import "./Profile.css";
import ChallengesRecieved from "../../components/ChallengesRecieved";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
const pages = ["HOME", "MESSAGES", "CONTACT US"];

const activeUser = JSON.parse(localStorage.getItem("user"));

const settings = [
  "Profile",
  "Submit Match",
  activeUser ? "Logout" : ("Login", "Sign Up"),
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = useState({});
  console.log("USER>>>>", user);
  const currentUser = localStorage.getItem("user");
  const [challenges, setChallenges] = useState([]);
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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Basketball LEGENDS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="avatar" src={user.avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

// export default function Profile() {
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
