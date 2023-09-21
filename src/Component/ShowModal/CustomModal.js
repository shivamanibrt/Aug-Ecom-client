import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../Redux/Modal/ModalSlice';

export const CustomModal = ({ heading, children }) => {
    const dispatch = useDispatch();
    const { showModal } = useSelector((state) => state.modal)

    return (
        <Modal
            show={showModal}
            onHide={() => dispatch(setShowModal(false))}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {children}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => dispatch(setShowModal(false))}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
