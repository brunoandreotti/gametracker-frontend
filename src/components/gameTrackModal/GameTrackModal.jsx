import { bool, func } from "prop-types";

import { Modal } from "react-bootstrap"

const GameTrackModal = ({ modalShow, setModalShow }) => {  
  
  return (
    
      <Modal show={modalShow} >
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        
      </Modal>
    
  );
}

GameTrackModal.propTypes = {
  modalShow: bool,
  setModalShow: func
}

export default GameTrackModal