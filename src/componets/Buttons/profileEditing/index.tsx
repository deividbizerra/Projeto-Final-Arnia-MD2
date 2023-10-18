import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { BottonProfile } from "./styled";


type Props = {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean; 
};

const ButtonProfile = ({ children,  onClick, isSelected }: Props) => {
  return (
    <div>
      <BottonProfile onClick={ onClick} isSelected={isSelected}> 
        {children}<KeyboardArrowRightIcon />
      </BottonProfile>
    </div>
  );
};

export default ButtonProfile;
