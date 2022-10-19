import React from "react";
import NavBar from "../components/NavBar";
import { BsSearch } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import "../styles/ListPosting.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { useTitle } from "utils/redux/UseTitle";

import CardPost from "components/CardPost";

const ListPosting = () => {
  useTitle("List Posting | Altagram");

  return (
    <>
      <NavBar />

      <div>
        <Container>
          <div className="grid col-4 py-5">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn" type="submit">
                <BsSearch />
              </button>
            </form>
          </div>
          <Row>
            <div className="grid col-3">
              <CardPost />
            </div>
            <div className="grid col-3">
              <CardPost />
            </div>
            <div className="grid col-3">
              <CardPost />
            </div>
            <div className="grid col-3">
              <CardPost />
            </div>
            <div className="grid col-3">
              <CardPost />
            </div>
            <div className="grid col-3">
              <CardPost />
            </div>
            <div className="grid col-3">
              <CardPost />
            </div>
            <div className="grid col-3">
              <CardPost />
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ListPosting;
