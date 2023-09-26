import CardsUserHome from "../../componets/cardInformation";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  CardWelcome,
  DivDate,
  DivImg,
  ContainerHome,
  CardUsers,
  BoxDoctorsEndContractors,
  Box,
  ContainerContent,
  ContainerTble,
  BoxInformationTable,
} from "./style";
import TodayIcon from "@mui/icons-material/Today";
import GroupIcon from "@mui/icons-material/Group";
import { dadosUsuarios } from "../registeredUser";
import { Link } from "react-router-dom";
import DataTable from "../../componets/table";
const Home = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("pt-BR");

  const dadosUsuariosLimitados = dadosUsuarios.slice(0, 4);

  return (
    <>
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

        <ContainerContent>
          <BoxDoctorsEndContractors>
            <h4>Médicos</h4>
            <CardUsers>
              <Box>
                <CardsUserHome
                  icon={<GroupIcon />}
                  title="Total"
                  content="1000"
                  variant="blue"
                />
              </Box>
              <Box>
                <CardsUserHome
                  icon={<GroupIcon />}
                  title="Disponivel"
                  content="900"
                />
              </Box>
              <Box>
                <CardsUserHome
                  icon={<GroupIcon />}
                  title="Indesponível"
                  content="1000"
                  variant="red"
                />
              </Box>
            </CardUsers>
          </BoxDoctorsEndContractors>

          <BoxDoctorsEndContractors>
            <h4>Contratantes</h4>

            <CardUsers>
              <Box>
                <CardsUserHome
                  icon={<PersonSearchIcon />}
                  title="Total"
                  content="1000"
                  variant="yellow"
                />
              </Box>
              <Box>
                <CardsUserHome
                  icon={<PersonSearchIcon />}
                  title="Ativos"
                  content="1000"
                />
              </Box>

              <Box>
                <CardsUserHome
                  icon={<PersonSearchIcon />}
                  title="Inativos"
                  content="1000"
                  variant="red"
                />
              </Box>
            </CardUsers>
          </BoxDoctorsEndContractors>
        </ContainerContent>
      </ContainerHome>

      <ContainerTble className="teste">
        <BoxInformationTable>
          <h2>Últimos usuários cadastrados</h2>
          <Link to="registered-user">Ver tudo <ArrowForwardIcon style={{ width: '20px', height:"20px" }}/></Link>
        </BoxInformationTable>
        <div>
          <DataTable  data={dadosUsuariosLimitados} columns={["Usuário", "E-mail", "WhatsApp", "Tipo de Usuário"]}
 />
        </div>
      </ContainerTble>
    </>
  );
};

export default Home;
