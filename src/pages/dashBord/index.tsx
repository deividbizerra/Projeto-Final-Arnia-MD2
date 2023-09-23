import CardsUserHome from "../../componets/cardInformation";
import { ContainerMain } from "../../componets/ui/container";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import {
  CardWelcome,
  DivDate,
  DivImg,
  ContainerHome,
  CardUsers,
} from "./style";
import TodayIcon from "@mui/icons-material/Today";
import GroupIcon from "@mui/icons-material/Group";
const Home = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("pt-BR");

  return (
    <ContainerMain>
      <ContainerHome>
        <CardWelcome>
          <DivImg>
            <img
              src="https://uploaddeimagens.com.br/images/004/616/866/full/image-removebg-preview.png?1695427040"
              alt=""
            />
          </DivImg>

          <DivDate>
            <TodayIcon /> {formattedDate}
          </DivDate>

          <h2>Seja bem vinda!</h2>
          <p>
            Neste painel você poderá administrar seu site de forma simples e
            prática.
          </p>
        </CardWelcome>

        <div className="teste">
          <div>
            <h4>Médicos</h4>
            <CardUsers>
              <CardsUserHome
                icon={<GroupIcon />}
                title="meico"
                content="ola"
                variant="blue"
              />
              <CardsUserHome icon={<GroupIcon />} title="meico" content="ola" />
              <CardsUserHome
                icon={<GroupIcon />}
                title="meico"
                content="ola"
                variant="red"
              />
            </CardUsers>
          </div>
          <div>
            <h4>Contratantes</h4>
            <CardUsers>
              <CardsUserHome
                icon={<PersonSearchIcon />}
                title="meico"
                content="ola"
                variant="yellow"
              />
              <CardsUserHome
                icon={<PersonSearchIcon />}
                title="meico"
                content="ola"
              />
              <CardsUserHome
                icon={<PersonSearchIcon />}
                title="meico"
                content="ola"
                variant="red"
              />
            </CardUsers>
          </div>
        </div>
      </ContainerHome>
    </ContainerMain>
  );
};

export default Home;
