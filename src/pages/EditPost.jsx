import React from "react";

import { WithRouter } from "utils/Navigation";
import { Link } from "react-router-dom";

import NavBar from "components/NavBar";
import Button from "react-bootstrap/Button";
import { ImBin2 } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";

function EditPost() {
  return (
    <div>
      <NavBar />
      <div className="p-4 shadow bg-white m-5 rounded">
        <div className="border-bottom mb-1">
          <div className="d-flex justify-content-between">
            <div></div>
            <div>
              <p className="text-center fw-bold">Edit Post</p>
            </div>
            <div>
              <Link to={"/"}>
                <AiFillCloseCircle />
              </Link>
            </div>
          </div>
        </div>
        <div className="row border rounded p-2 m-0">
          <div className="grid col-6">
            <div className="border rounded col-12 text-center mb-2 d-flex justify-content-between align-items-center">
              <div></div>
              <div className="row d-flex justify-content-center align-items-center w-50">
                <img src="https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg" alt="postingan" />
              </div>
              <div className="me-2 mt-2 d-flex align-self-baseline">
                <ImBin2 />
              </div>
            </div>
          </div>
          <div className="grid- col-6">
            <div className="border rounded p-2 h-100">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <img className="fotoprofil m-1" src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png" alt="foto profil" />
                </div>
                <div>Cattie</div>
              </div>
              <div className="d-flex flex-column justify-content-between h-75">
                <div className="my-2">
                  <textarea className="w-100 border-0 caption rounded" rows="10" id="caption">
                    What on your mind, Cattie?
                  </textarea>
                </div>
              </div>
              <div className="w-100">
                <Button className="w-100 btn-save">Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithRouter(EditPost);
