import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddButton from "../../componets/Buttons/addButton";
import { ContDescription } from "../../componets/contetDescription";
import FilterSearch from "../../componets/filterSearch";
import { ContainerTble } from "../dashBord/style";
import { ContainerCardFilter, ContainerFilter } from "../registeredUser/styled";
import Table from "../../componets/table/inde";
import CustomIconButtons from "../../componets/ui/icons";
import {
  deleteNotifications,
  getNotifications,
} from "../../config/service/notifications";
import { CardFilterUsers } from "../../componets/cardFilterUsers";

const Notifications = () => {
  const Columns = ["Título", "Data de envio", "Ações"];
  const navigation = useNavigate();
  const [, setUserData] = useState([]);
  const [userDataProcessed, setUserDataProcessed] = useState<
    ProcessedNotification[]
  >([]);
  const [filteredNotifications, setFilteredNotifications] = useState<
    ProcessedNotification[]
  >([]);
  const [selectedTab, setSelectedTab] = useState("CONTRATANTE");

  const fetchData = async () => {
    try {
      const userDataResponse = await getNotifications(selectedTab);

      if (userDataResponse) {
        setUserData(userDataResponse);
        console.log(userDataResponse);
        const dataTemp: ProcessedNotification[] = userDataResponse.content.map(
          (item: ProcessedNotification) => {
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
                  onEdit={() => handleEdit(item.id, item.type)}
                  onDelete={handleDelete}
                />
              ),
            };
          }
        );
        setUserDataProcessed(dataTemp);
        setFilteredNotifications(dataTemp); // Define as notificações filtradas como as notificações originais
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedTab]);

  const handleSearch = (searchTerm: string) => {
    const filtered = userDataProcessed.filter((notification) =>
      notification.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotifications(filtered);
  };

  const handleDelete = async (id: string | number) => {
    try {
      await deleteNotifications(id);
      fetchData();
      console.log(`Excluiu a notificação com ID ${id}`);
    } catch (error) {
      console.error("Erro ao excluir a notificação:", error);
    }
  };

  const handleEdit = (id: number, userType: string) => {
    navigation(`/home/edit-notification?type=${userType}&id=${id}`);
  };

  return (
    <>
      <ContDescription description="Notificações" />

      <ContainerCardFilter>
        <CardFilterUsers
          text="Contratantes"
          isSelected={selectedTab === "CONTRATANTE"}
          onClick={() => setSelectedTab("CONTRATANTE")}
        />
        <CardFilterUsers
          text="Médicos"
          isSelected={selectedTab === "MEDICO"}
          onClick={() => setSelectedTab("MEDICO")}
        />
      </ContainerCardFilter>
      <ContainerTble style={{ marginTop: "32px" }}>
        <ContainerFilter>
          <FilterSearch onSearch={handleSearch} />
          <Link to={`/home/new-notifications?type=${selectedTab}`}>
            <AddButton>Nova Notificação</AddButton>
          </Link>
        </ContainerFilter>

        <Table columns={Columns} data={filteredNotifications} />
      </ContainerTble>
    </>
  );
};

export default Notifications;
