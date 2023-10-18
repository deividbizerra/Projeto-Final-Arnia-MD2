import React from "react";
import { ModalContainer, UserInfo } from "./styled";
import { Person as PersonIcon } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UserMenu: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <UserInfo>
        <span>
          <PersonIcon />
        </span>
        <div>
          <Link to="profile" onClick={onClose}>
            Usuário
          </Link>
        </div>
      </UserInfo>

      <UserInfo>
        <span>
          <LogoutIcon />
        </span>
        <div>
          <Link to="/" onClick={onClose}>
            Sair
          </Link>
        </div>
      </UserInfo>
    </ModalContainer>
  );
};

export default UserMenu;
