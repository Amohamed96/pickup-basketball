import React from "react";
import Navbar from "../../components/Navbar";
import RegisterForm from "../../components/RegisterForm";
import './Register.css'

export default function Register () {
  return (
    <div className="RegisterPage">
    <Navbar />
    <div className="register">
    <RegisterForm />
    </div>
    </div>
  );
}