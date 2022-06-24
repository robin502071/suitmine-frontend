import iconCWS from '../../images/BookingMap/彰化-01.png';
import CWSimg from '../../images/BookingMap/彰化店照片.jpg';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div class="RWDcard">
          <div class="PopconfirmCardImgBox">
            <img src={CWSimg} class="PopconfirmCardImg " alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title">彰化店</h5>
            <div className="my-2 d-flex">
              <p className="">04-22253456</p>
            </div>
            <div className="d-flex">
              <p>彰化縣彰化市旭光西路75號</p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="PopconfirmCardBtn btn btn-info"
          onClick={props.onHide}
        >
          <p>Close</p>
        </button>
      </Modal.Footer>
    </Modal>
  );
}

function RWDpopconfirmTPE() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div
        className="RWDcwsBox d-md-none d-flex"
        onClick={() => setModalShow(true)}
      >
        <img className="RWDiconTPE" src={iconCWS} alt="" />
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default RWDpopconfirmTPE;
