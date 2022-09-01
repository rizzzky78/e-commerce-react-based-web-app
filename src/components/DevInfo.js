import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How do I Make this Website?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Using React Component</h4>
        <p>
          You can visit My Website at:
        </p>
        <a href='https://github.com/rizzzky78'>Rizzzky</a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const DevInfo = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
        Developer Contact
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default DevInfo;