import React, { ReactNode } from 'react'; // Importe React e ReactNode
import AddIcon from '@mui/icons-material/Add';
import { ButtonStyle } from './styled';

interface AddButtonProps {
  children: ReactNode;
}

const AddButton: React.FC<AddButtonProps> = ({ children }) => {
  return (
    <>
      <ButtonStyle>
        <AddIcon />
        {children}
      </ButtonStyle>
    </>
  );
};

export default AddButton;
