import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Description as DescriptionIcon,
  AccountTree as AccountTreeIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon,
} from "@mui/icons-material";
import {
  BoxHover,
  ContainerImg,
  ContainerSidbar,
  Li,
  Ul,
} from "./styled-sidbar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ContainerSidbar className="sidebar">
       

        <ContainerImg>
          <img
            src="https://uploaddeimagens.com.br/images/004/616/365/original/Frame.png?1695393529"
            alt=""
          />
        </ContainerImg>

        <Ul className="sidebar-list">
          <BoxHover>
            <Li className="sidebar-item">
              <Link to="/home">
                <DashboardIcon /> Dashboard
              </Link>
            </Li>
          </BoxHover>
          <BoxHover>
            <Li className="sidebar-item">
              <Link to="registered-user">
                <PeopleIcon /> Usuários Cadastrados
              </Link>
            </Li>
          </BoxHover>

          <BoxHover>
            <Li className="sidebar-item">
              <Link to="plans">
                <DescriptionIcon /> Planos
              </Link>
            </Li>
          </BoxHover>

          <BoxHover>
            <Li className="sidebar-item">
              <Link to="specialties">
                <AccountTreeIcon /> Especialidades
              </Link>
            </Li>
          </BoxHover>

          <BoxHover>
            <Li className="sidebar-item">
              <Link to="notifications">
                <NotificationsIcon /> Notificações
              </Link>
            </Li>
          </BoxHover>

          <BoxHover>
            <Li className="sidebar-item">
              <Link to="faq">
                <HelpIcon /> FAQ
              </Link>
            </Li>
          </BoxHover>
        </Ul>
      </ContainerSidbar>
    </>
  );
};

export default Sidebar;
