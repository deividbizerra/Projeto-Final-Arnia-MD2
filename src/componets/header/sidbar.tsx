import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Description as DescriptionIcon,
  AccountTree as AccountTreeIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon,
} from "@mui/icons-material";
import { BoxHover, ContainerImg, ContainerSidbar, Ul } from "./styled-sidbar";
import NaveBar from "./naveBar";

const Sidebar = () => {
  const sidebarItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Usuários Cadastrados", icon: <PeopleIcon /> },
    { text: "Planos", icon: <DescriptionIcon /> },
    { text: "Especialidades", icon: <AccountTreeIcon /> },
    { text: "Notificações", icon: <NotificationsIcon /> },
    { text: "FAQ", icon: <HelpIcon /> },
  ];

  return (
    <>

      <ContainerSidbar className="sidebar">
      <NaveBar/>
      
        <ContainerImg>
          <img
            src="https://uploaddeimagens.com.br/images/004/616/365/original/Frame.png?1695393529"
            alt=""
          />
        </ContainerImg>

        <Ul className="sidebar-list">
          {sidebarItems.map((item, index) => (
            <BoxHover>
              <li key={index} className="sidebar-item">
                {item.icon}
                {item.text}
              </li>
            </BoxHover>
          ))}
        </Ul>
       
      </ContainerSidbar>

      
      
    </>
  );
};

export default Sidebar;
