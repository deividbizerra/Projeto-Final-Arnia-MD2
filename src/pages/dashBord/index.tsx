import CardsUserHome from "../../componets/cardInformation";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { usersDashBoard } from "../../config/service/usersDashbord";
import { usersRegister } from "../../config/service/usersRegiste";
import Table from "../../componets/newTable";

const Home = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("pt-BR");
  const [userDashboard, setUserDashboard] = useState<usersDashBoard | null>(
    null
  );
  const [, setUserData] = useState<[]>([]);
  const [userDataProcessed, setUserDataProcessed] = useState<[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userDataResponse = await usersRegister();
        if (userDataResponse) {
          setUserData(userDataResponse.content);
          let dataTemp: any = [];
          userDataResponse.content.forEach((item: any) => {
            dataTemp.push({
              user: `${item.firstName} ${item.lastName}`,
              email: item.email,  
              whatsapp: item.phone,
              userType: item.profiles.length > 0 ? item.profiles[0].name : "",
            });
          });
          setUserDataProcessed(dataTemp);
          console.log(userDataResponse.content);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data: usersDashBoard = await usersDashBoard();
        if (data) {
          setUserDashboard(data);
        }
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário:", error);
      }
    }

    fetchUserData();
  }, []);

  const dadosUsuariosLimitados = userDataProcessed.slice(0, 4);

  const Columns = ["Usuário", "E-mail", "WhatsApp", "Tipo de usuario"];

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

          <h2>Seja bem-vindo!</h2>
          <p>
            Neste painel, você poderá administrar seu site de forma simples e
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
                  content={userDashboard?.doctor.total ?? 0}
                  variant="blue"
                />
              </Box>
              <Box>
                <CardsUserHome
                  icon={<GroupIcon />}
                  title="Disponível"
                  content={userDashboard?.doctor.available ?? 0}
                />
              </Box>
              <Box>
                <CardsUserHome
                  icon={<GroupIcon />}
                  title="Indisponível"
                  content={userDashboard?.doctor.unavailable ?? 0}
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
                  content={userDashboard?.contractor.total ?? 0}
                  variant="yellow"
                />
              </Box>
              <Box>
                <CardsUserHome
                  icon={<PersonSearchIcon />}
                  title="Ativos"
                  content={userDashboard?.contractor.available ?? 0}
                />
              </Box>

              <Box>
                <CardsUserHome
                  icon={<PersonSearchIcon />}
                  title="Inativos"
                  content={userDashboard?.contractor.unavailable ?? 0}
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
          <Link to="registered-user">
            Ver tudo{" "}
            <ArrowForwardIcon style={{ width: "20px", height: "20px" }} />
          </Link>
        </BoxInformationTable>
        <div>
          <Table columns={Columns} data={dadosUsuariosLimitados} />
        </div>
      </ContainerTble>
    </>
  );
};

export default Home;
