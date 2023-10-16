import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddButton from "../../componets/Buttons/addButton";
import { ContDescription } from "../../componets/contetDescription";
import FilterSearch from "../../componets/filterSearch";
import { ContainerTble } from "../dashBord/style";
import { ContainerFilter } from "../registeredUser/styled";
import Table from "../../componets/Table";
import CustomIconButtons from "../../componets/ui/icons";
import { questions } from "../../config/service/questions";


const Faq = () => {
  const Columns = ["Título", "Ações"];

  const [, setUserData] = useState([]);
  const [userDataProcessed, setUserDataProcessed] = useState<ProcessedUserType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userDataResponse = await questions();

        if (userDataResponse) {
          setUserData(userDataResponse);
          console.log(userDataResponse)
          const dataTemp: ProcessedUserType[] = userDataResponse.content.map((item: UserType) => ({
            name: `${item.title}`,
            actions: (  
              <CustomIconButtons
                id={item.id} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
            ),
          }));
          setUserDataProcessed(dataTemp);
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

  return (
    <>
      <ContDescription description="FAQ (Perguntas Frequentes)" />
      <ContainerTble style={{ marginTop: "32px" }}>
        <ContainerFilter>
          <FilterSearch />
          <Link to="/home/new-faq">
            <AddButton>Novo FAQ</AddButton>
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

export default Faq;