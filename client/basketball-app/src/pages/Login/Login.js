import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";

export default function Login(props) {
 
  const [user, setUser] = useState({name: "", email: ""});
  


  return (
    <>
      <Navbar />
      <div className="login">
      <LoginForm />
      </div>
         
      
    </>
  );
}
