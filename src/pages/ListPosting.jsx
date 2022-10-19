import React from "react";
import NavBar from "../components/NavBar";
import { BsSearch } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import "../styles/ListPosting.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const ListPosting = () => {
  return (
    <>
      <NavBar />
      <div>
        <Form className=" container search-list d-flex">
          <div>
            <input type="search" placeholder="Search" className="custom-search" />
            <BsSearch style={{ width: "20px", height: "20px" }} />
          </div>
        </Form>
      </div>
      <div>
        <Container>
          <Row>
            <Col className="col-list">
              <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
            </Col>

            <Col className="col-list">
              <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
            </Col>

            <Col className="col-list">
              <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
            </Col>

            <Col className="col-list">
              <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
            </Col>
          </Row>
          <Row>
            <Col className="col-list">
              <img src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid" />
            </Col>

            <Col className="col-list">
              <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
            </Col>

            <Col className="col-list">
              <img src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid" />
            </Col>

            <Col className="col-list">
              <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ListPosting;
