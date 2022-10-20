import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/Register.css";
import { useTitle } from "utils/redux/UseTitle";

const Register = () => {
  useTitle("Register | Altagram");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="colo col-4">
          <p className="text-right mt-2">
            Have an account? <a href="/login">Login</a>
          </p>
          <span>
            <img src="cat.png" className="img-fluid" />
          </span>
        </div>
        <div className="coloo col-8">
          <div className="border-form d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h1 className="sign text-center">Sign In</h1>
            <Form className="form-register">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control className="box" type="name" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="box" type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="box" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

              <div className="form-check text-right">
                <input className="form-check-input text-right" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-desc text-right" for="flexCheckDefault">
                  I ve read and agree with <a href="#!"> Terms Of Service</a> and our <a href="#!">privacy policy</a>
                </label>
              </div>
              <Form.Group className="button">
                <Button className="submit text-black fw-bold" size="lg">
                  Sign Up
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
