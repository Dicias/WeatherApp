import '../scss/modal.css'

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Modal Title</h2>
        <p>Modal content goes here...</p>
      </div>
    </div>
  );
};

export default Modal;
