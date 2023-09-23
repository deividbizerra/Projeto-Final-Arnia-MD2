import { ModalContainer, UserInfo } from "./styled"; // Importe os estilos necessários
import { Person as PersonIcon } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const UserMenu:React.FC<UserMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <UserInfo>
        <span>
          <PersonIcon />
        </span>
        <div>
        <Link to="">Usuario</Link>
        </div>
      </UserInfo>

      <UserInfo>
        <span>
          <LogoutIcon />
        </span>
        <div>
          <Link to="/">Sair</Link>
        </div>
      </UserInfo>
    </ModalContainer>
  );
};

export default UserMenu;
