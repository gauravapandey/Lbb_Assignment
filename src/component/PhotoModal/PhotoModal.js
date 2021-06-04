import React from 'react';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import { Modal, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './PhotoModal.scss';

const PhotoModal = (props) => {
    const { modalIsOpen, closeModal, position } = props;

    return(
        <Modal isOpen={modalIsOpen} className={"photo-gallery-modal"}>
            <ModalHeader toggle={closeModal}>Photo Gallery</ModalHeader>
            <PhotoGallery location={position} />
        </Modal>
    )
}

export default PhotoModal;