import React from 'react';
import Modal from 'react-modal';

// Define custom styles for the modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%', // Limit modal width
    maxHeight: '80%', // Limit modal height
    overflow: 'auto', // Enable scrolling if content exceeds modal dimensions
    padding: '20px', // Add padding for better appearance
    borderRadius: '10px', // Rounded corners
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Box shadow for depth
    backgroundColor: '#fff', // White background
    border: 'none', // Remove border
  },
};

const ConfirmationModal = ({ isOpen, onClose, onConfirm, itemName, isClearCart }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div>
        <h2>Confirmation</h2>
        <p>
          Are you sure you want to {isClearCart ? 'clear the cart' : `remove ${itemName} from the cart`}?
        </p>
        <div style={{ textAlign: 'center' }}> {/* Center buttons */}
          <button style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#ccc', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onClose}>Cancel</button>
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;


