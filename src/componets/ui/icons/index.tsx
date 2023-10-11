import React from 'react';
import IconButton from '@mui/material/IconButton';
import { ContainerIcons, DeleteIconStyled, EditIconStyled, VisibilityIconStyled } from './styled';
import ModalDeleted from '../../modalDeleted';

type CustomIconButtonsProps = {
    id: string | number;
    onEdit: (id: string | number) => void; 
    onDelete: (id: string | number) => void; 
  };


const CustomIconButtons = ({ id, onEdit, onDelete }:CustomIconButtonsProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <IconButton aria-label="Visualizar">
      <ContainerIcons>
        
        <VisibilityIconStyled />
      </ContainerIcons>
      </IconButton>

      <IconButton aria-label="Editar" onClick={() => onEdit(id)}>
      <ContainerIcons>
        
        <EditIconStyled />
        </ContainerIcons>
      </IconButton>

      <IconButton aria-label="Excluir" onClick={handleDeleteClick}>

      <ContainerIcons>
        
        <DeleteIconStyled />
        </ContainerIcons>
      </IconButton>

      <ModalDeleted
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={() => {
          closeModal();
          onDelete(id);
        }}
      />
    </>
  );
};

export default CustomIconButtons;
