import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
import LoginForm from "../../components/LoginForm";


export default function Login(props) {
  const userDummy = {
    email: 'user@example.com',
    password: 'user123'
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const login1 = function(creds) {
     console.log(creds)
  }
  const logout = function() {
    console.log('Logging out... bye')
  }
  return (   
    <div className="login">
    {(user.email != "")   ? (
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>Logout</button> 
      </div>
    ) : <LoginForm login={login1()} error={error} /> }
    
    </div> 
  )
  
}