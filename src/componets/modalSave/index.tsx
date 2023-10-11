import React from 'react';
import { ModalOverlay, ModalContainer, CloseButton } from './styled';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>

        <CheckCircleIcon className="check-icon" style={{ color: 'green', fontSize: 60 }} />
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
