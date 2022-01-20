import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import Navbar from "../../components/Navbar"; 
import './Profile.css'

export default function Profile() {
  const [user, setUser] = useState({});
  console.log("USER>>>>", user);

  useEffect(() => {
    const currentUser = localStorage.getItem("user");
    console.log("CURRENT USER from LOCAL", currentUser);
    setUser(JSON.parse(currentUser));
  }, []);

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <div className="profile">
=======
      {/* <div className="profile">
>>>>>>> features/login
        <div className="username">{user.name}</div>
        <div className="bio">{user.bio}</div>
        <img src={user.avatar} />
        <div className="profile-user"></div>
        <div className="Icon"><i className="fad fa-plus-square"></i></div>
<<<<<<< HEAD
      </div>
      {/* <div class="container">
  <header>
    <i class="fa fa-bars" aria-hidden="true"></i>
  </header>
  <main>
    <div class="row">
      <div class="left col-lg-4">
        <div class="photo-left">
          <img class="photo" src="https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          <div class="active"></div>
        </div>
        <h4 class="name">{user.name}</h4>
        <p class="info">{user.bio}</p>
        <p class="info">jane.doe@gmail.com</p>
        <div class="stats row">
          <div class="stat col-xs-4" style="padding-right: 50px;">
            <p class="number-stat">3,619</p>
            <p class="desc-stat">Followers</p>
          </div>
          <div class="stat col-xs-4">
            <p class="number-stat">42</p>
            <p class="desc-stat">Following</p>
          </div>
          <div class="stat col-xs-4" style="padding-left: 50px;">
            <p class="number-stat">38</p>
            <p class="desc-stat">Uploads</p>
          </div>
        </div>
        <p class="desc">Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I really enjoy photography and mountains.</p>
        <div class="social">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
          <i class="fa fa-pinterest-square" aria-hidden="true"></i>
          <i class="fa fa-tumblr-square" aria-hidden="true"></i>
        </div>
      </div>
      <div class="right col-lg-8">
        <ul class="nav">
          <li>Gallery</li>
          <li>Collections</li>
          <li>Groups</li>
          <li>About</li>
        </ul>
        <span class="follow">Follow</span>
        <div class="row gallery">
          <div class="col-md-4">
             <img src="https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
            <img src="https://images.pexels.com/photos/861034/pexels-photo-861034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
             <img src="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
             <img src="https://images.pexels.com/photos/5049/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
            <img src="https://images.pexels.com/photos/428431/pexels-photo-428431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
            <img src="https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
        </div>
      </div>
=======
      </div> */}
      <header>
  <figure class="profile-banner">
    <img src="https://unsplash.it/975/300" alt="Profile banner" />
  </figure>
  <figure class="profile-picture" >
  </figure>
  <div class="profile-stats">
    <ul>
      <li>13    <span>Projects</span></li>
      <li>1,354 <span>Commits</span></li>
      <li>32    <span>Following</span></li>
      <li>324   <span>Followers</span></li>
    </ul>
    <a href="javascript:void(0);" class="follow">
      Follow Nick
    </a>
  </div>
  <h1>{user.name} <small>{user.bio}</small></h1>
</header>
      {/* <div class="container">
  <header>
    <i class="fa fa-bars" aria-hidden="true"></i>
  </header>
  <main>
    <div class="row">
      <div class="left col-lg-4">
        <div class="photo-left">
          <img class="photo" src="https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          <div class="active"></div>
        </div>
        <h4 class="name">{user.name}</h4>
        <p class="info">{user.bio}</p>
        <p class="info">jane.doe@gmail.com</p>
        <div class="stats row">
          <div class="stat col-xs-4" style="padding-right: 50px;">
            <p class="number-stat">3,619</p>
            <p class="desc-stat">Followers</p>
          </div>
          <div class="stat col-xs-4">
            <p class="number-stat">42</p>
            <p class="desc-stat">Following</p>
          </div>
          <div class="stat col-xs-4" style="padding-left: 50px;">
            <p class="number-stat">38</p>
            <p class="desc-stat">Uploads</p>
          </div>
        </div>
        <p class="desc">Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I really enjoy photography and mountains.</p>
        <div class="social">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
          <i class="fa fa-pinterest-square" aria-hidden="true"></i>
          <i class="fa fa-tumblr-square" aria-hidden="true"></i>
        </div>
      </div>
      <div class="right col-lg-8">
        <ul class="nav">
          <li>Gallery</li>
          <li>Collections</li>
          <li>Groups</li>
          <li>About</li>
        </ul>
        <span class="follow">Follow</span>
        <div class="row gallery">
          <div class="col-md-4">
             <img src="https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
            <img src="https://images.pexels.com/photos/861034/pexels-photo-861034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
             <img src="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
             <img src="https://images.pexels.com/photos/5049/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
            <img src="https://images.pexels.com/photos/428431/pexels-photo-428431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
          <div class="col-md-4">
            <img src="https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          </div>
        </div>
      </div>
>>>>>>> features/login
      </div>
  </main>
</div> */}

    </>
  );
}
