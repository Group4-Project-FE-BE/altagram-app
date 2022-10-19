import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { CgDanger } from "react-icons/cg";

function MyVerticallyCenteredModal(props) {
  const BtnYes = {
    backgroundColor: "#6768AB",
    border: "0",
  };

  const BtnCancel = {
    backgroundColor: "red",
    border: "0",
  };

  const CircleI = {
    color: "#FA8B78",
    width: "100px",
    height: "100px",
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="border-0">
        <Modal.Title id="contained-modal-title-vcenter" className="border-0 w-100">
          <div className="w-100 d-flex justify-content-center">
            <CgDanger style={CircleI} />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="offset-3 col-6">
          <p className="text-center fw-bold">Anda Yakin Ingin Menghapus Postingan Ini?</p>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <div className="w-100 d-flex align-items-center justify-content-center">
          <Button onClick={props.onHide} className="m-1" style={BtnYes}>
            Yes, delete it!
          </Button>
          <Button onClick={props.onHide} className="m-1" style={BtnCancel}>
            Cancel
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function Delete() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Click Disini
      </Button>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Delete;
