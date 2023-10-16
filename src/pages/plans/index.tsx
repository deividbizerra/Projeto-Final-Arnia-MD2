import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddButton from "../../componets/Buttons/addButton";
import { ContDescription } from "../../componets/contetDescription";
import FilterSearch from "../../componets/filterSearch";
import { ContainerTble } from "../dashBord/style";
import { ContainerCardFilter, ContainerFilter } from "../registeredUser/styled";
import { deletePlans, getPlans } from "../../config/service/plans";
import Table from "../../componets/Table";
import { IOSSwitch } from "../../componets/switch";
import CustomIconButtons from "../../componets/ui/icons";
import { CardFilterUsers } from "../../componets/cardFilterUsers";

const Plans = () => {
  const Columns = ["Plano", "Valor", "Situação", "Ações", "Tipo de usuário"];
  const navigation = useNavigate();
  const [userData, setUserData] = useState<ProcessPlans[]>([]);
  const [selectedTab, setSelectedTab] = useState("CONTRATANTE");

  console.log(selectedTab);

  const fetchData = async () => {
    try {
      const userDataResponse = await getPlans();

      if (userDataResponse) {
        setUserData(
          userDataResponse.content.map((item: ProcessPlans) => ({
            period: `${item.period}`,
            values: item.values,
            status: (
              <div>
                <IOSSwitch sx={{ m: 1 }} checked={item.enabled} />
                {item.enabled ? "Ativo" : "Inativo"}
              </div>
            ),
            actions: (
              <CustomIconButtons
                id={item.id}
                onEdit={() => handleEdit(item.id)}
                onDelete={() => handleDelete(item.id)}
              />
            ),
            type: `${item.type}`,
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

  const handleEdit = (id) => {
    navigation(`/home/edit-plans?type=${selectedTab}&id=${id}`);
  };

  const handleDelete = async (id: string | number) => {
    try {
      await deletePlans(id);
      fetchData();
      console.log(`Excluiu o plano com ID ${id}`);
    } catch (error) {
      console.error("Erro ao excluir o plano:", error);
    }
  };

  const filteredPlanos = (categoria) => {
    if (categoria === "MEDICO") {
      return userData.filter((plano) => plano.type === "MEDICO");
    } else if (categoria === "CONTRATANTE") {
      return userData.filter((plano) => plano.type === "CONTRATANTE");
    }
  };

  console.log(filteredPlanos(selectedTab));

  return (
    <>
      <ContDescription description="Planos" />

      <ContainerCardFilter>
        <CardFilterUsers
          text="Contratantes"
          isSelected={selectedTab === "CONTRATANTE"}
          onClick={() => setSelectedTab("CONTRATANTE")}
          quantid={5}
        />
        <CardFilterUsers
          text="Médicos"
          isSelected={selectedTab === "MEDICO"}
          onClick={() => setSelectedTab("MEDICO")}
          quantid={0}
        />
      </ContainerCardFilter>
      <ContainerTble style={{ marginTop: "32px" }}>
        <ContainerFilter>
          <FilterSearch />
          <Link to={`/home/new-plans?type=${selectedTab}`}>
            <AddButton>Novo Plano</AddButton>
          </Link>
        </ContainerFilter>

        <Table columns={Columns} data={filteredPlanos(selectedTab)} />
      </ContainerTble>
    </>
  );
};

export default Plans;
