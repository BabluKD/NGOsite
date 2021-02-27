import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Login from "../pages/LogReg/Login";
import "./styles/titlebar.style.css";

const TitleBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="titlebar">
        <Container>
          <Row>
            <Col md={3} xs={6} className="mt-2">
              <span>CONTACT NUMBER</span>
            </Col>
            <Col md={3} xs={6} className="mt-2">
              <span>SOCIAL ACCOUNTS</span>
            </Col>
            <Col md={3} xs={6} className="my-2">
              <span>SOMETHING ELSE</span>
            </Col>
            <Col md={3} xs={6} className="my-2">
              <Button
                variant="outline-dark"
                className="btn-sm"
                onClick={handleShow}
              >
                <strong>Admin Login</strong>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h3>Admin Login</h3>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TitleBar;
