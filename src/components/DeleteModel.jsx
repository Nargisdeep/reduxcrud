import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModel=(props)=> {

  return (
    <>
        <Modal show={props.deleteshow} onHide={props.handleDeleteClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Entry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you Really Want to delete This Entry?<br></br>
                Press Delete to delete
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleDelete}>
                    Delete
                </Button>
                <Button variant="primary" onClick={props.handleDeleteClose}>
                    Cancel
                </Button>
            </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeleteModel

