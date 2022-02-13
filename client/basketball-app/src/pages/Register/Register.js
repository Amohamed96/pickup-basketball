import React from "react";
import Navbar from "../../components/Header/Navbar";
import RegisterForm from "../../components/UserAuth/RegisterForm";
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