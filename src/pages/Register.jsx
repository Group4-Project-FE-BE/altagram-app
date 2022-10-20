import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Form, Button } from "react-bootstrap";
import "../styles/Register.css";
import Image from "react-bootstrap/Image";
import { useTitle } from "utils/redux/UseTitle";
import CustomButton from "components/CostumButton";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useTitle("Register | Altagram");

  useEffect(() => {
    if (email && name && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      name,
      email,
      password,
    };

    axios
      .post(`http://13.212.207.162:8000/register`, body)
      .then((res) => {
        console.log(res);
        const { message, data } = res.data;
        if (data) {
          navigate("/");
        }
        alert(message);
      })

      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mt-5 border">
      <div className="row ">
        <div className="colo col-4">
          <p className="text-right mt-2">
            Have an account? <a href="/login">Login</a>
          </p>
          <div className="w-100">
            <img src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" alt="" className="w-100" />
          </div>
        </div>
        <div className="coloo col-8">
          <div className="border-form d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h1 className="sign text-center">Sign In</h1>
            <form className="form-register" onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control className="box" type="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="box" type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="box" type="password" placeholder="Password" onChange={(e) => setPasword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

              <div className="form-check text-right">
                <input className="form-check-input text-right" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-desc text-right" for="flexCheckDefault">
                  I ve read and agree with <a href="#!"> Terms Of Service</a> and our <a href="#!">privacy policy</a>
                </label>
              </div>
              <CustomButton id="btn-register" label="Register" loading={loading || disabled} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
