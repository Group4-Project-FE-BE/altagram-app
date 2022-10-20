import { Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import { useTitle } from "utils/redux/UseTitle";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  useTitle("Login | Altagram");

  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies("");
  const [login, setLogin] = useState("");

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    axios .post("http://13.212.207.162:8000/login",userLogin)
    .then((res) => {
      setCookies('Token', res.data.data.token, { path: '/' });
      navigate("/");
    })
    .catch(() => alert("Username / password salah"));
  }

  const inputLogin = (e) => {
    let newLogin = {...userLogin };
    newLogin[e.target.name] = e.target.value;
    setUserLogin(newLogin);
    console.log(userLogin);
  };

  return (
    <div>
      <main className="form-containers">
        <Form onSubmit={(e) => handleLogin(e)} className="form-boxs m-auto" >
          <h1 className="logins">Login</h1>
          <Form.Group className="titles" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="email" type="text" placeholder="Email" name="email" value={userLogin.email} onChange={inputLogin} />
          </Form.Group>
          <Form.Group className="titles" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="passwords" type="password" placeholder="Password" name="password"  value={userLogin.password} onChange={inputLogin} />
          </Form.Group>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/profile">password?</a>
          </p>
          <Form.Group className="buttons">
            <Button type="submit" className="submits text-black fw-bold">
              Sign In
            </Button>
          </Form.Group>
        </Form>
      </main>
      <div className="form-container-signup">
        <Form className="form-signup m-auto"> 
          <p className="signup"> 
            Dont have an account?{" "} 
            <a className="sign" href="/register" onClick={() => setLogin((prev) => !prev)}> 
              Sign up 
            </a> 
          </p> 
        </Form>
      </div>
    </div>
  );
};

export default Login;
