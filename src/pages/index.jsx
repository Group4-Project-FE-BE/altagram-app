import React from "react";
import { useState, useEfect } from "react";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import History from "../components/History";
import { WithRouter } from "utils/Navigation";
import Container from "react-bootstrap/Container";
import "../styles/index.css";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useTitle } from "utils/redux/UseTitle";

function Home(props) {
  useTitle("Home | Altagram");
  return (
    <>
      <NavBar onNavigate={() => props.navigate(`/Detail/coba`)} />
      <div className="container mt-5">
        <div className="row align-items-start">
          <div className="col-8">
            <div className="border">
              <Header />
              <div>
                <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <History />
            <h4 className="sugges">Suggestion for you</h4>
            <div className="sugges">
              <Container fluid className="sugges">
                <div className="account">
                  <Navbar.Brand>
                    <Link to="/" className="fw-bold text-black text-decoration-none">
                      <Nav.Link href="#action2" className="love">
                        <CgProfile style={{ width: "32px", height: "32px" }} /> momosicatcute
                      </Nav.Link>
                    </Link>
                  </Navbar.Brand>
                </div>

                <div className="account">
                  <Navbar.Brand>
                    <Link to="/" className="fw-bold text-black text-decoration-none">
                      <Nav.Link href="#action2" className="love">
                        <CgProfile style={{ width: "32px", height: "32px" }} /> catypely
                      </Nav.Link>
                    </Link>
                  </Navbar.Brand>
                </div>

                <div className="account">
                  <Navbar.Brand>
                    <Link to="/" className="fw-bold text-black text-decoration-none">
                      <Nav.Link href="#action2" className="love">
                        <CgProfile style={{ width: "32px", height: "32px" }} /> mycatt
                      </Nav.Link>
                    </Link>
                  </Navbar.Brand>
                </div>

                <div className="account">
                  <Navbar.Brand>
                    <Link to="/" className="fw-bold text-black text-decoration-none">
                      <Nav.Link href="#action2" className="love">
                        <CgProfile style={{ width: "32px", height: "32px" }} /> catloversss
                      </Nav.Link>
                    </Link>
                  </Navbar.Brand>
                </div>

                <div className="account">
                  <Navbar.Brand>
                    <Link to="/" className="fw-bold text-black text-decoration-none">
                      <Nav.Link href="#action2" className="love">
                        <CgProfile style={{ width: "32px", height: "32px" }} /> catdonasiions
                      </Nav.Link>
                    </Link>
                  </Navbar.Brand>
                </div>

                <div className="account">
                  <Navbar.Brand>
                    <Link to="/" className="fw-bold text-black text-decoration-none">
                      <Nav.Link href="#action2" className="love">
                        <CgProfile style={{ width: "32px", height: "32px" }} /> cattylion
                      </Nav.Link>
                    </Link>
                  </Navbar.Brand>
                </div>

                <div className="account">
                  <Navbar.Brand>
                    <Link to="/" className="fw-bold text-black text-decoration-none">
                      <Nav.Link href="#action2" className="love">
                        <CgProfile style={{ width: "32px", height: "32px" }} /> cattylion
                      </Nav.Link>
                    </Link>
                  </Navbar.Brand>
                </div>

                <div className="account">
                  <Navbar.Brand>
                    <Link to="/" className="fw-bold text-black text-decoration-none">
                      <Nav.Link href="#action2" className="love">
                        <CgProfile style={{ width: "32px", height: "32px" }} /> cattylion
                      </Nav.Link>
                    </Link>
                  </Navbar.Brand>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithRouter(Home);
