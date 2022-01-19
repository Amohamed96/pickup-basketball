import React, {useEffect, useState} from "react";
import axios from 'axios'
import './Profile.css'

export default function Profile () {


const [user, setUser] = useState({})
console.log('USER>>>>', user)


  useEffect(()=> {
    const currentUser = localStorage.getItem('user');
    console.log('CURRENT USER from LOCAL', currentUser)
    setUser(JSON.parse(currentUser));
  }, [])

  return (
    <div className="profile">
      <div className="username">
      {user.name} 
      </div>
      <div className="bio">
        {user.bio}
      </div>
      <img 
      src={user.avatar}
      />
      <div className="profile-user"></div>
    </div> 
  );
}