import React, {useEffect, useState} from "react";
import axios from 'axios'

export default function Profile () {


const [user, setUser] = useState({})
console.log('USER>>>>', user)


  useEffect(()=> {
    axios.get('http://localhost:3000/api/users')
    .then((res) => {
      console.log('RESULTS>>', res)
      return res.data
    })
    .then((results) => {
      setUser(results[0])
    })
  }, [])

  return (
    <div className="profile">
      {user.name} {user.bio}
      <img 
      src={user.avatar}
      />
      <div className="profile-user"></div>
    </div> 
  );
}