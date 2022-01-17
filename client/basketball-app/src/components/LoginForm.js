import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginForm(login1, error) {
  const [creds, setCreds] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    login1(creds);
  };

  return <div className="LoginForm">Hello World</div>;
}
