import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddButton from "../../componets/Buttons/addButton";
import { ContDescription } from "../../componets/contetDescription";
import FilterSearch from "../../componets/filterSearch";
import { ContainerTble } from "../dashBord/style";
import { ContainerFilter } from "../registeredUser/styled";
import Table from "../../componets/Table";
import CustomIconButtons from "../../componets/ui/icons";
import { getNotifications} from "../../config/service/notifications";

const Notifications = () => {
  const Columns = ["Título", "Data de envio", "Ações"];

  const [, setUserData] = useState([]);
  const [userDataProcessed, setUserDataProcessed] = useState<ProcessedUserType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userDataResponse = await getNotifications();

        if (userDataResponse) {
          setUserData(userDataResponse);
          console.log(userDataResponse);
          const dataTemp: ProcessedUserType[] = userDataResponse.content.map((item: UserType) => {
            // Converter a string de data em um objeto Date
            const dataEnvio = new Date(item.sendingDate);

            // Extrair os componentes da data
            const dia = dataEnvio.getDate();
            const mes = dataEnvio.getMonth() + 1; // Adicionando 1 porque os meses começam em 0
            const ano = dataEnvio.getFullYear();

            // Formatar a data como "DD/MM/AAAA"
            const dataFormatada = `${dia}/${mes}/${ano}`;

            return {
              name: `${item.title}`,
              sendingDate: dataFormatada, // Formatar a data como desejado (DD/MM/AAAA)
              actions: (
                <CustomIconButtons
                  id={item.id}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ),
            };
          });
          setUserDataProcessed(dataTemp);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const handleEdit = (id: string | number) => {
    console.log(`Editar item com ID ${id}`);
  };

  const handleDelete = (id: string | number) => {
    console.log(`Excluir item com ID ${id}`);
  };

  return (
    <>
      <ContDescription description="Notificações" />
      <ContainerTble style={{ marginTop: "32px" }}>
        <ContainerFilter>
          <FilterSearch/>
          <Link to="/home/new-notifications">
            <AddButton>Nova Notificação</AddButton>
          </Link>
        </ContainerFilter>

        <Table
          columns={Columns}
          data={userDataProcessed}
        />
      </ContainerTble>
    </>
  );
};

export default Notifications;
