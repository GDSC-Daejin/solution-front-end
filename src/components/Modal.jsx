import PropTypes from 'prop-types';

function Modal({ message, title, onClose }) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-gray-600 mb-4">{message}</p>
      <div className="flex justify-end">
        <button
          className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default Modal;
