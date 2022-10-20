import React from "react";
import Navbar from "components/NavBar";
import Button from "react-bootstrap/Button";
import "../styles/EditProfile.css";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { Card } from "react-bootstrap";
import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/redux/UseTitle";

const EditProfile = () => {
  useTitle("Edit Profil | Altagram");

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div>
          <h1 className="title">Edit Profile</h1>
        </div>
        <div className="frame row">
          <div className="col-12">
          <Card className="shadow-lg justify-center align-self-center col-4">
                    <Image src="https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-2.jpg" style={{ width: "10rem", height: "10rem" }} className="row mx-auto my-2 image-fluid"></Image>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Gambar</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    Ukuran Maksimal Gambar adalah 1mb
                </Card>
            <Card className="shadow-lg justify-center align-self-center col-4">
              <Image src="https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-2.jpg" style={{ width: "10rem", height: "10rem" }} className="row mx-auto my-2 image-fluid"></Image>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Gambar</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              Ukuran Maksimal Gambar adalah 1mb
            </Card>
            col 79.729-37.20
          </div>
          <div className="col">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="cattie" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="user@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Female</option>
                  <option value="1">Male</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="at bogor" />
              </Form.Group>
            </Form>
          </div>

          <div className="col">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Bio</Form.Label>
                <Form.Control type="text" placeholder="akun cattie" />
              </Form.Group>

              <div>
                <h5>Change Password</h5>
                <di>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="******" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="******" />
                  </Form.Group>
                </di>
              </div>
            </Form>
          </div>
          <div className="button">
            <Button variant="primary" type="submit" className="button-save ">
              <div className="save">Save</div>
            </Button>
            <Button variant="primary" type="submit" className="button-delete">
              <div className="delete">Delete</div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithRouter(EditProfile);
