import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/EditProfile.css";
import Form from "react-bootstrap/Form";
import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/redux/UseTitle";
import FileUpload from "components/FileUpload";

const Profile = ({ name, email, phone, gender, bio, location, password, onClickEdit, onClickCreate, handleEdit, onClickRemove }) => {
  useTitle("Edit Profil | Altagram");

  return (
    <>
      <div>
      <div className="container-fluid">
        <div>
          <h1 className="title">Edit Profile</h1>
        </div>
        <div className="frame row">
          <div className="col">
            <FileUpload />
          </div> 
          <div className="col">
            <Form onClickEdit={(e) => handleEdit(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail" value={name || ""} onClick={onClickEdit}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="cattie" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail"value={email || ""} onClick={onClickEdit}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="user@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" value={phone || ""} onClick={onClickEdit}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="int" placeholder="Phone number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" value={gender || ""} onClick={onClickEdit}>
                <Form.Label>Gender</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Female</option>
                  <option value="1">Male</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" value={location || ""} onClick={onClickEdit}>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="at bogor" />
              </Form.Group>
            </Form>
          </div>

          <div className="col">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail" value={bio || ""} onClick={onClickEdit}>
                <Form.Label>Bio</Form.Label>
                <Form.Control type="text" placeholder="akun cattie" />
              </Form.Group>

              <div>
                <h5>Change Password</h5>
                <di>
                  <Form.Group className="mb-3" controlId="formBasicPassword" value={password || ""} onClick={onClickEdit}>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="******" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword" value={password || ""} onClick={onClickEdit}>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="******" />
                  </Form.Group>
                </di>
              </div>
            </Form>
          </div>
          <div className="button">
            <Button variant="primary" type="submit" className="button-save" onClick={onClickCreate}>
              <div className="save">Save</div>
            </Button>
            <Button variant="primary" type="submit" className="button-delete" onClick={onClickRemove}>
              <div className="delete">Delete</div>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default WithRouter(Profile);
