import { Form, Button } from "react-bootstrap";
import "../styles/Login.css";


const Login = () => {
  return (
    <div>
      <main className="form-containers">
        <Form className="form-boxs m-auto">
          <h1 className="logins">Login</h1>
          <Form.Group className="titles" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control className="usernames" type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="titles" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="passwords" type="password" placeholder="Password" />
          </Form.Group>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
          <Form.Group className="buttons">
            <Button className="submits text-black fw-bold">
              Sign In
            </Button>
          </Form.Group>
        </Form>
      </main>
      <div className="form-container-signup">
        <Form className="form-signup m-auto">
          <p className="signup">
            Dont have an account? <a className="sign" href="#">Sign up</a>
          </p>
        </Form>
        </div>
    </div>
  );
};

export default Login;
