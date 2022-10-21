import React from "react";
import { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import History from "../components/History";
import { WithRouter } from "utils/Navigation";
import Container from "react-bootstrap/Container";
import "../styles/index.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useTitle } from "utils/redux/UseTitle";
import ImagePosting from "components/ImagePosting";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const Home = (props) =>  {
  useTitle("Home | Altagram");
    const [datas, setData] = useState([]);
    const [posting, setPosting] = useState(true);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    function fetchData() {
      axios
        .get(`https://virtserver.swaggerhub.com/Group4-Project-FE-BE/openapi_project2_team4/1.0.0/postings/1`)
        .then((res) => {
          const { data } = res.data;
          const temp = [...datas];
          temp.push(...data);
          setData(temp);
        })
        .catch((err) => {
          alert(err.toString());
        })
        .finally(() => {
          setPosting(false);
        });
      }
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row align-items-start">
          <div className="col-lg-6 mb-5">
            <div className="border">
              <div className="m-10 p-0 border">
                <Header />
                {posting ? <Skeleton /> : datas.map((datum) => <ImagePosting onNavigate={() => props.navigate(`/Detail/coba`)} />)}              
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
