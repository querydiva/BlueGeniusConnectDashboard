import React, {useState} from "react";
import {Button, Modal, ModalBody} from "reactstrap";
import DockEquipmentSummary from "../DockAssetEquipmentSummary/DockEquipmentSummary"


const DocksEquipmentSummaryModal = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [modalClassic, setModalClassic] = React.useState(false);
    const toggleModalClassic = () => {
        setModalClassic(!modalClassic);
    };

    return (
        <div>


                <hr />
                <div
                    className="stats"
                   style={{color:"blue"}}>
                    <i className="tim-icons icon-settings"
                       onClick={toggleModalClassic}/>
                       <button className="text-blue-500 underline" onClick={toggleModalClassic}>
                    Equipments Details
                </button>
                </div>
            {/* Classic Modal */}
            <Modal isOpen={modalClassic} toggle={toggleModalClassic} size="xl"
                   style={{marginTop: "40px"}}>
                <div className="modal-header justify-content-center">
                    <button
                        aria-hidden={true}
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={toggleModalClassic}
                    >
                        <i className="tim-icons icon-simple-remove"/>
                    </button>
                    <h6 className="title title-up">{props.obj.title}</h6>
                </div>
                <div className="modal-header justify-content-center">
                    <h6 className="title title-up" style={{color:"green"}}>Equipment/Serial No./Installed Date/Model No./Last Serviced</h6>
                </div>

                <ModalBody className="white-content">


                    <div>
                        <DockEquipmentSummary/>
                    </div>


                </ModalBody>

                <div className="modal-footer">

                    <Button color="info" type="button" onClick={toggleModalClassic}>
                        Ok
                    </Button>
                    <Button
                        color="danger"
                        data-dismiss="modal"
                        type="button"
                        onClick={toggleModalClassic}
                    >
                        Close
                    </Button>
                </div>
            </Modal>
            {/* End Classic Modal */}
        </div>
    );
};

export default DocksEquipmentSummaryModal;
