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
import ImagePosting from "components/ImagePosting";

function Home(props) {
  useTitle("Home | Altagram");
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row align-items-start">
          <div className="col-lg-6 mb-5">
            <div className="border">
              <div className="m-0 p-0 border">
                <Header />
                <ImagePosting onNavigate={() => props.navigate(`/Detail/coba`)} />
              </div>
            </div>
          </div>
          <div className="offset-lg-2 col-lg-4">
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
