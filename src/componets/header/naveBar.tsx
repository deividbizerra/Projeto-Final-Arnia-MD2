
import { ContainerUser } from "./styled-navebar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import UserMenu from "../modalUser";
import { useState } from "react";

const NaveBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navebar">
      <ContainerUser>
        <span>
        <PersonOutlinedIcon />
        </span>
        <div>
          <h3>Deivid Souza <KeyboardArrowDownIcon  onClick={toggleMenu}/></h3>
          <p>deividsouza@gmail.com</p>
        </div>
      </ContainerUser>
      <UserMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
};

export default NaveBar;
