import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModalButton({ displayText, warning }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='homeText'>{displayText}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm warning={warning} />
        </Modal>
      )}
    </>
  );
};

export default LoginFormModalButton;
