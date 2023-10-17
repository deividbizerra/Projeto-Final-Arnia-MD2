import { ContainerUser } from "./styled-navebar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import UserMenu from "../modalUser";
import { useEffect, useState } from "react";
import { ApiFindUser } from "../../config/service/login";

const NaveBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userData, setUserData] = useState<UserData>();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data: UserData = await ApiFindUser();
        if (data) {
          setUserData(data);
        }
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário:", error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className="navebar">
      <ContainerUser>
        <span>
          <PersonOutlinedIcon />
        </span>
        <div>
          
          
        <h3>
  {userData && `${userData.firstName} ${userData.lastName}`}
  <KeyboardArrowDownIcon onClick={toggleMenu} />  
</h3>
<p>{userData?.email}</p>

          
          
          
        </div>
      </ContainerUser>
      <UserMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
};

export default NaveBar;
