import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddButton from "../../componets/Buttons/addButton";
import { ContDescription } from "../../componets/contetDescription";
import FilterSearch from "../../componets/filterSearch";
import { ContainerTble } from "../dashBord/style";
import { ContainerFilter } from "../registeredUser/styled";
import Table from "../../componets/table/inde";
import CustomIconButtons from "../../componets/ui/icons";
import { questions } from "../../config/service/questions";

const Faq = () => {
  const Columns = ["Título", "Ações"];

  const [, setUserData] = useState([]);
  const [userDataProcessed, setUserDataProcessed] = useState<ProcessedUserType[]>(
    []
  );
  const [filteredData, setFilteredData] = useState<ProcessedUserType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userDataResponse = await questions();

        if (userDataResponse) {
          setUserData(userDataResponse);
          console.log(userDataResponse);
          const dataTemp: ProcessedUserType[] = userDataResponse.content.map(
            (item: UserType) => ({
              name: `${item.title}`,
              actions: (
                <CustomIconButtons
                  id={item.id}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ),
            })
          );
          setUserDataProcessed(dataTemp);
          setFilteredData(dataTemp); // Define os dados filtrados como os dados originais
          console.log(userDataResponse.content);
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

  const handleSearch = (searchTerm: string) => {
    // Filtrar os dados com base na palavra-chave
    const filtered = userDataProcessed.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <ContDescription description="FAQ (Perguntas Frequentes)" />
      <ContainerTble style={{ marginTop: "32px" }}>
        <ContainerFilter>
          <FilterSearch onSearch={handleSearch} />
          <Link to="/home/new-faq">
            <AddButton>Novo FAQ</AddButton>
          </Link>
        </ContainerFilter>

        <Table columns={Columns} data={filteredData} />
      </ContainerTble>
    </>
  );
};

export default Faq;
