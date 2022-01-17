import React, { useState } from "react"
import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

export default function LoginForm(login1, error) {

  const [creds, setCreds] = useState({ name: "", email: "", password: "" })


  const submitHandler = e => {
    e.preventDefault();
    login1(creds)
  }

  return (
    // <form onSubmit={submitHandler}>
    //   <div className="form-inner">
    //     <h2>Log In</h2>
    //     {/*ERROR */ }
    //     <div className="form-group">
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" name="name" id="name" />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" name="email" id="email" onChange={e => setCreds({...creds, name: e.target.value }) } value={creds.name}/>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input type="password" name="password" id="password" />
    //     </div>
    //   </div>

    // </form>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

}
