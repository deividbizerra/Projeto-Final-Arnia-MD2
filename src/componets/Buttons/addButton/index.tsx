import React, { ReactNode } from "react"; // Importe React e ReactNode
import AddIcon from "@mui/icons-material/Add";
import { ButtonStyle } from "./styled";

interface AddButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <ButtonStyle onClick={onClick}>
        <AddIcon />
        {children}
      </ButtonStyle>
    </>
  );
};

export default AddButton;
