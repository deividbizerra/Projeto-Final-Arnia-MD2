import { Person as PersonIcon } from "@mui/icons-material";
import { ContainerUser } from "./styled-navebar";

const NaveBar = () => {
  return (
    <div>
      <ContainerUser>
        <span>
          <PersonIcon />
        </span>

        <div>
          <h3>Deivid souza</h3>
          <p>deividsouza@gmail.com</p>
        </div>
      </ContainerUser>
    </div>
  );
};

export default NaveBar;
