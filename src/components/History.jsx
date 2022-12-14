import Container from "react-bootstrap/Container";
import "../styles/History.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function NavScroll() {
  return (
    <Navbar expand="lg" className="background-history d-flex">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className="fw-bold text-black text-decoration-none">
            <Nav.Link href="#action2" className="love">
                <CgProfile style={{ width: "32px", height: "32px" }} /> Cuttie
            </Nav.Link>
          </Link>
        </Navbar.Brand>
        <div>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="button-nav me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link to="/register">Switch account</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
