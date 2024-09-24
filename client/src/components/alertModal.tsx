import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface AlertModalProps {
  title: string;
  message: string;
  closeModal: () => void;
  returnToSearchResults: () => void;
}

function AlertModal({
  title,
  message,
  closeModal,
  returnToSearchResults,
}: AlertModalProps) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Go to My Account
          </Button>
          <Button variant="primary" onClick={returnToSearchResults}>
            Return to Search
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default AlertModal;
