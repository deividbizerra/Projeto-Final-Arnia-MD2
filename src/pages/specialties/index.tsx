import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AddButton from "../../componets/Buttons/addButton";
import { ContDescription } from "../../componets/contetDescription";
import FilterSearch from "../../componets/filterSearch";
import { ContainerTble } from "../dashBord/style";
import { ContainerFilter } from "../registeredUser/styled";
import {
  getSpecialties,
  deleteSpecialty,
} from "../../config/service/specialties";
import Table from "../../componets/newTable";
import { IOSSwitch } from "../../componets/switch";
import CustomIconButtons from "../../componets/ui/icons";

const Specialties = () => {
  const Columns = ["Nome especialidade", "Situação", "Ações"];
  const navigation = useNavigate();
  const [userData, setUserData] = useState<ProcessedUserType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<ProcessedUserType[]>([]); // Dados filtrados

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);

    // Filtrar os dados com base no novo termo de pesquisa
    const filtered = userData.filter((item) =>
      item.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const fetchData = async () => {
    try {
      const userDataResponse = await getSpecialties();

      if (userDataResponse) {
        setUserData(
          userDataResponse.content.map((item: UserType) => ({
            name: `${item.name}`,
            status: (
              <div>
                <IOSSwitch sx={{ m: 1 }} checked={item.enabled} />
                {item.enabled ? "Ativo" : "Inativo"}
              </div>
            ),
            actions: (
              <CustomIconButtons
                id={item.id}
                onEdit={() => handleEdit(item)}
                onDelete={() => handleDelete(item.id)}
              />
            ),
          }))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (specialty: any) => {
    navigation(`/home/edit-specialty/${specialty.id}`);
  };

  const handleDelete = async (id: string | number) => {
    try {
      await deleteSpecialty(id);
      fetchData();
      console.log(`Excluiu a especialidade com ID ${id}`);
    } catch (error) {
      console.error("Erro ao excluir a especialidade:", error);
    }
  };

  return (
    <>
      <ContDescription description="Especialidades" />
      <ContainerTble style={{ marginTop: "32px" }}>
        <ContainerFilter>
          <FilterSearch onSearch={handleSearch} />
          <Link to="/home/new-specialty">
            <AddButton>Nova Especialidade</AddButton>
          </Link>
        </ContainerFilter>

        <Table
          columns={Columns}
          data={searchTerm ? filteredData : userData} // Usar dados filtrados se a pesquisa estiver ativa
        />
      </ContainerTble>
    </>
  );
};

export default Specialties;
