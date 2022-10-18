import React from "react";

import { WithRouter } from "utils/Navigation";

import NavBar from "components/NavBar";
import Button from "react-bootstrap/Button";
import { GiSmartphone } from "react-icons/gi";
import { BiImageAdd } from "react-icons/bi";

function CreatePosting() {
  return (
    <div>
      <NavBar />
      <div className="p-4 shadow bg-white m-5 rounded">
        <div className="border-bottom mb-1">
          <p className="text-center fw-bold">Create Post</p>
        </div>
        <div className="row border rounded p-2 m-0">
          <div className="grid col-6">
            <div className="border h-75 rounded col-12 text-center mb-2">
              <div className="row h-100 d-flex justify-content-center align-items-center">
                <BiImageAdd />
              </div>
            </div>
            <div className="border rounded col">
              <div className="row m-2">
                <div className="grid col-9">
                  <div className="row h-100">
                    <div className="grid col-1">
                      <GiSmartphone className="h-100" />
                    </div>
                    <div className="grid col-8 h-100">Add photos from your mobile device</div>
                  </div>
                </div>
                <div className="grid col-3">
                  <Button className="w-100">add</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid- col-6">
            <div className="border rounded p-2">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <img className="fotoprofil m-1" src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png" alt="" />
                </div>
                <div>Castie</div>
              </div>

              <div className="my-2">
                <textarea className="form-control" id="caption" rows="5" placeholder="What on your mind, Cattie?"></textarea>
              </div>
              <div className="w-100">
                <Button className="w-100" variant="secondary">
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithRouter(CreatePosting);
