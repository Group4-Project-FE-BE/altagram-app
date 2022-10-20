import { Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import { useTitle } from "utils/redux/UseTitle";

const Login = () => {
  useTitle("Login | Altagram");
  return (
    <div>
      <main className="form-container">
        <Form className="form-box m-auto">
          <h1 className="login">Login</h1>
          <Form.Group className="title" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control className="username" type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="title" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="password" type="password" placeholder="Password" />
          </Form.Group>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
          <Form.Group className="button">
            <Button className="submit text-black">Sign In</Button>
          </Form.Group>
        </Form>
      </main>
      <div className="form-container-signup">
        <Form className="form-signup m-auto">
          <p className="signup">
            Dont have an account?{" "}
            <a className="sign" href="/register">
              Sign up
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
