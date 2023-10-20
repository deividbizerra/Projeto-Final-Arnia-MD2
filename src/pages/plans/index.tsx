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
  const Columns = ["Plano", "Valor", "Situação", "Ações"];
  const navigation = useNavigate();
  const [userData, setUserData] = useState<ProcessPlans[]>([]);
  const [selectedTab, setSelectedTab] = useState("CONTRATANTE");

  const fetchData = async () => {
    try {
      const userDataResponse = await getPlans(selectedTab);

      if (userDataResponse) {
        setUserData(
          userDataResponse.content.map((item: ProcessPlans) => ({
            period: `${item.period}`,
            values: new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.values), // Format values as currency
            status: (
              <div>
                <IOSSwitch sx={{ m: 1 }} checked={item.enabled} />
                {item.enabled ? "Ativo" : "Inativo"}
              </div>
            ),
            actions: (
              <CustomIconButtons
                id={item.id}
                onEdit={() => handleEdit(item.id, item.type)}
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
  }, [selectedTab]);

  const handleDelete = async (id: string | number) => {
    try {
      await deletePlans(id);
      fetchData();
      console.log(`Excluiu o plano com ID ${id}`);
    } catch (error) {
      console.error("Erro ao excluir o plano:", error);
    }
  };

  const handleEdit = (id: number, userType: string) => {
    navigation(`/home/edit-plans?type=${userType}&id=${id}`);
  };

  return (
    <>
      <ContDescription description="Planos" />

      <ContainerCardFilter>
        <CardFilterUsers
          text="Contratantes"
          isSelected={selectedTab === "CONTRATANTE"}
          onClick={() => setSelectedTab("CONTRATANTE")}
          quantid={0}
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

        <Table columns={Columns} data={userData} />
      </ContainerTble>
    </>
  );
};

export default Plans;
