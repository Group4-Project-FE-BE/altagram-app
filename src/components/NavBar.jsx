import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

function NavScroll() {
  return (
    <Navbar bg="danger" expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">
              <AiFillHome />
            </Nav.Link>
            <Nav.Link href="#action2">
              <AiOutlineHeart />
            </Nav.Link>
            <Nav.Link href="#">
              <IoMdNotificationsOutline />
            </Nav.Link>
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">DASHBOARD</NavDropdown.Item>
              <NavDropdown.Item href="#action4">PROFIL</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">LOG OUT</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
