import React, { useEffect, useState } from "react";
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
import { usersDashBoard } from "../../config/service/usersDashbord";
import { usersRegister } from "../../config/service/usersRegiste";
import Table from "../../componets/table/inde";

interface ProcessedUserData {
  user: string;
  email: string;
  whatsapp: string;
  userType: string;
}
interface UserProfile {
  name: string;
  // Outras propriedades, se aplicável
}

interface UserDashboardData {
  doctor: {
    total: number;
    available: number;
    unavailable: number;
  };
  contractor: {
    total: number;
    available: number;
    unavailable: number;
  };
}

const Home: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("pt-BR");
  const [userDashboard, setUserDashboard] = useState<UserDashboardData | null>(
    null
  );
  const [userDataProcessed, setUserDataProcessed] = useState<ProcessedUserData[]>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const userDataResponse = await usersRegister();
        if (userDataResponse) {
          const dataTemp: ProcessedUserData[] = userDataResponse.content.map(
            (item: UserData) => {
              let userType = "";

              if (typeof item.profiles[0] === "string") {
                userType = item.profiles[0];
              } else if (
                typeof item.profiles[0] === "object" &&
                "name" in item.profiles[0]
              ) {
                const userProfile = item.profiles[0] as UserProfile;
                userType = userProfile.name;
              }
              return {
                user: `${item.firstName} ${item.lastName}`,
                email: item.email,
                whatsapp: item.phone,
                userType,
              };
            }
          );
          setUserDataProcessed(dataTemp);
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
        const data: UserDashboardData = await usersDashBoard();
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

  const Columns: string[] = [
    "Usuário",
    "E-mail",
    "WhatsApp",
    "Tipo de usuário",
  ];

  return (
    <div>
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
    </div>
  );
};

export default Home;
