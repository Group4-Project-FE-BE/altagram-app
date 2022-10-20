import Container from "react-bootstrap/Container";
import "../styles/App.css";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";

function NavScroll() {
  return (
    <Navbar expand="lg" className="background-nav d-flex">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className="fw-bold text-black text-decoration-none">
            Altagram
          </Link>
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="search d-flex">
              <div>
                <input type="search" placeholder="Search" className="custom-search rounded-pill border-0 p-2 m-1" />
                <BsSearch style={{ width: "20px", height: "20px" }} />
              </div>
            </Form>

            <Nav className="button-nav me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/" className="home">
                <AiFillHome style={{ width: "26px", height: "26px" }} />
              </Nav.Link>
              <Nav.Link href="/list-posting" className="love">
                <AiOutlineHeart style={{ width: "26px", height: "26px" }} />
              </Nav.Link>
              <Nav.Link href="/create-post" className="notif">
                <FiPlusSquare style={{ width: "26px", height: "26px" }} />
              </Nav.Link>
              <NavDropdown title="Profile" id="navbarScrollingDropdown" className="profile">
                <NavDropdown.Item href="/">DASHBOARD</NavDropdown.Item>
                <NavDropdown.Item href="/profile">PROFIL</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">LOG OUT</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
