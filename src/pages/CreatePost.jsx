import React from "react";

import { WithRouter } from "utils/Navigation";
import { Link } from "react-router-dom";

import NavBar from "components/NavBar";
import Button from "react-bootstrap/Button";
import { BiImageAdd } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import { useTitle } from "utils/redux/UseTitle";

function CreatePosting() {
  useTitle("Create Post | Altagram");
  return (
    <div>
      <NavBar />
      <div className="p-4 shadow bg-white m-5 rounded">
        <div className="border-bottom mb-1">
          <div className="d-flex justify-content-between">
            <div></div>
            <div>
              <p className="text-center fw-bold">Create Post</p>
            </div>
            <div>
              <Link to={"/"}>
                <AiFillCloseCircle />
              </Link>
            </div>
          </div>
        </div>
        <div className="row border rounded p-2 m-0">
          <div className="grid col-lg-6">
            <div className="border h-75 rounded col-12 text-center mb-2">
              <iv className="row h-100 d-flex justify-content-center align-items-center">
                <BiImageAdd />
              </iv>
            </div>

            <div className="row h-100">
              <Form.Group controlId="formFile" className="">
                <Form.Control type="file" />
              </Form.Group>
            </div>
          </div>
          <div className="grid- col-lg-6">
            <div className="border rounded p-2">
              <div className="d-flex align-items-center my-sm-auto">
                <div className="me-lg-3 ">
                  <img className="fotoprofil m-lg-1 m-md-5" src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png" alt="foto rpofil" />
                </div>
                <div>Castie</div>
              </div>

              <div className="my-2">
                <textarea className="form-control caption" id="caption" rows="5" placeholder="What on your mind, Cattie?"></textarea>
              </div>
              <div className="w-100">
                <Button className="w-100 btn-save text-black fw-bold">Post</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithRouter(CreatePosting);
