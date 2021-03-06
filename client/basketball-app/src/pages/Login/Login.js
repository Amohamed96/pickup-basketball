import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
import LoginForm from "../../components/UserAuth/LoginForm";
import Navbar from "../../components/Header/Navbar";

export default function Login(props) {
 
  const [user, setUser] = useState({name: "", email: ""});
  // useEffect(()=> {
  //   fetch('http://localhost:3000/api/users')
  //     .then((res) => {
  //       return res.json();  
  //     })
  //     .then((results) => {
  //       console.log(results);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  // }, [])

  return (
    <>
      <Navbar users={user}/>
      <div className="login">
      <LoginForm />
      </div>
         
      
    </>
  );
}
