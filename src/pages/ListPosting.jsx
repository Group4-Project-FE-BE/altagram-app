import React from 'react'
import NavBar from "../components/NavBar";
import { BsSearch } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import "../styles/ListPosting.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

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
        <Col className='col-list'>
        <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
        <div>Caption: This cat so cute</div>
        <div>Lihat semua 100 komentar</div>
        <div>42 menit yang lalu</div>
        </Col>

        <Col className='col-list'>
        <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
        <div>Caption: This cat so cute</div>
        <div>Lihat semua 100 komentar</div>
        <div>42 menit yang lalu</div>
        </Col>

        <Col className='col-list'>
        <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
        <div>Caption: This cat so cute</div>
        <div>Lihat semua 100 komentar</div>
        <div>42 menit yang lalu</div>
        </Col>

        <Col className='col-list'>
        <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
        <div>Caption: This cat so cute</div>
        <div>Lihat semua 100 komentar</div>
        <div>42 menit yang lalu</div>
        </Col>
      </Row>
      <Row>
      <Col className='col-list'>
        <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
        <div>Caption: This cat so cute</div>
        <div>Lihat semua 100 komentar</div>
        <div>42 menit yang lalu</div>
        </Col>

        <Col className='col-list'>
        <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
        <div>Caption: This cat so cute</div>
        <div>Lihat semua 100 komentar</div>
        <div>42 menit yang lalu</div>
        </Col>

        <Col className='col-list'>
        <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
        <div>Caption: This cat so cute</div>
        <div>Lihat semua 100 komentar</div>
        <div>42 menit yang lalu</div>
        </Col>

        <Col className='col-list'>
        <Image src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" style={{ width: "12rem", height: "16rem" }} className="image-list row mx-auto my-2 image-fluid"></Image>
        <div>Caption: This cat so cute</div>
        <div>Lihat semua 100 komentar</div>
        <div>42 menit yang lalu</div>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default ListPosting