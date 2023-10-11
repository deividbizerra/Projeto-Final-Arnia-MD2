// ModalDeleted.js

import { Link } from 'react-router-dom';
import { CloseButton, ModalContainer, ModalOverlay } from '../modalSave/styled';
import { StyledButton } from '../ui/button/styled';

const ModalDeleted:React.FC<ModalProps> = ({ isOpen, onClose, onDelete }) => {
    if (!isOpen) {
        return null;
      }
    
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h1>Tem certeza que deseja <span>excluir</span> este item?</h1>
        <StyledButton onClick={onDelete} variant='SECONDARY'>Sim, excluir item</StyledButton>
        <Link to="#"  onClick={onClose}>Voltar</Link>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalDeleted;
