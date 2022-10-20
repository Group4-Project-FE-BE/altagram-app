import React from "react";
import NavBar from "../components/NavBar";
import { BsSearch } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import "../styles/ListPosting.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { WithRouter } from "utils/Navigation";

import { useTitle } from "utils/redux/UseTitle";

import CardPost from "components/CardPost";

const ListPosting = (props) => {
  useTitle("Post | Altagram");

  return (
    <>
      <NavBar />

      <div>
        <Container>
          <div className="grid col-lg-4 py-lg-5 my-3">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn" type="submit">
                <BsSearch />
              </button>
            </form>
          </div>
          <Row>
            <div className="grid col-lg-3 col-md-4 col-sm-2">
              <CardPost onNavigate={() => props.navigate(`/Detail/coba`)} />
            </div>
            <div className="grid col-lg-3 col-md-4 col-sm-2">
              <CardPost onNavigate={() => props.navigate(`/Detail/coba`)} />
            </div>
            <div className="grid col-lg-3 col-md-4 col-sm-2">
              <CardPost onNavigate={() => props.navigate(`/Detail/coba`)} />
            </div>
            <div className="grid col-lg-3 col-md-4 col-sm-2">
              <CardPost onNavigate={() => props.navigate(`/Detail/coba`)} />
            </div>
            <div className="grid col-lg-3 col-md-4 col-sm-2">
              <CardPost onNavigate={() => props.navigate(`/Detail/coba`)} />
            </div>
            <div className="grid col-lg-3 col-md-4 col-sm-2">
              <CardPost onNavigate={() => props.navigate(`/Detail/coba`)} />
            </div>
            <div className="grid col-lg-3 col-md-4 col-sm-2">
              <CardPost onNavigate={() => props.navigate(`/Detail/coba`)} />
            </div>
            <div className="grid col-lg-3 col-md-4 col-sm-2">
              <CardPost onNavigate={() => props.navigate(`/Detail/coba`)} />
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WithRouter(ListPosting);
