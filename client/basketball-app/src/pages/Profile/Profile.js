import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import Navbar from "../../components/Navbar"; 
import './Profile.css'

export default function Profile() {
  const [user, setUser] = useState({});
  console.log("USER>>>>", user);
  const currentUser = localStorage.getItem("user");

  useEffect(() => {
    console.log("CURRENT USER from LOCAL", currentUser);
    setUser(JSON.parse(currentUser));
  }, [currentUser]);

  return ( 
    <>
      <Navbar users={user}/>
      {!user ? <h1>PLEASE LOGIN ---</h1> : 
      <div class="padding">
    <div class="col-md-8">
    
        <div class="card"> <img class="card-img-top" src="https://i.dlpng.com/static/png/5913661-vinyl-basketball-court-photography-children-backdrops-backdrop-for-basketball-court-background-640_436_preview.png" alt="Card image cap" />
            <div class="card-body little-profile text-center">
                <div class="pro-img"><img src={user.avatar} alt="user" /></div>
                <h3 class="m-b-0">{user.name}</h3>
                <p>{user.bio}</p> <a href="javascript:void(0)" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Challenge</a>
                <div class="row text-center m-t-20">
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">66</h3><small>GP</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">43</h3><small>Wins</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">23</h3><small>  Losses</small>
                    </div>
                    <div className="vid">
                      <iframe width="550" height="400" src="https://www.youtube.com/embed/yuHbkUoT5oE?autoplay=1&mute=1"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}
    </>
      
  );
}
