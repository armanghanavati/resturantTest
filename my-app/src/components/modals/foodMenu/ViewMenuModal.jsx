import React from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { pizza } from "../../data/listItem";
import { RsetShowModal, selectShowModal, selectType } from "../../slices/menuSlice";

const ViewMenuModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(selectShowModal)
  const type = useSelector(selectType)

  console.log(type);

  return (
    <Modal
      centered
      show={showModal}
      onHide={() => { dispatch(RsetShowModal(false)) }}
      backdrop="static"
      role="dialog"
      dialogClassName="modal-90w"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header className="d-block bg-danger text-white">
        <Modal.Title className="d-flex justify-content-center">
          <span>مشاهده غذا </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <ul className="list-unstyled">
          <li className="mb-3">
            <span className="fw-bold">نام : </span>
            <span> {type.name} </span>
          </li>
          <li className="mb-3">
            <span className="fw-bold">مخلفات: </span>
            <span> {type.des} </span>
          </li>
          <li className="mb-3">
            <span className="fw-bold">قیمت: </span>
            <span> {type.cost} تومان </span>
          </li>
          <li className="mb-3 d-flex justify-content-center">
            <img className="shadow rounded" width="600px" height="500px" src={type.image} />
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <div>
          <Button
            className="justify-content-end"
            variant="secondary"
            onClick={() => {
              dispatch(RsetShowModal(false))
            }}
          >
            بستن
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewMenuModal;
