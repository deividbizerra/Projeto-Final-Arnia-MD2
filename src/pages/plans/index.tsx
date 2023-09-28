import AddButton from "../../componets/Buttons/addButton";
import { CardFilterUsers } from "../../componets/cardFilterUsers";
import { ContDescription } from "../../componets/contetDescription";
import FilterSearch from "../../componets/filterSearch";
import DataTable from "../../componets/table";
import { ContainerTble } from "../dashBord/style";
import { ContainerCardFilter, ContainerFilter } from "../registeredUser/styled";



const Plans = () => {
  const planos = [
    {
      plano: "Plano A",
      valor: 100.0,
      precoPromocional: 80.0,
      situacao: true,
    },
    {
      plano: "Plano B",
      valor: 150.0,
      precoPromocional: 120.0,
      situacao: false,
    },
    {
        plano: "Plano B",
        valor: 150.0,
        precoPromocional: 120.0,
        situacao: true,
      },
   
  ];

  return (
    <>
      <ContDescription description="Planos" text=""/>

      <ContainerCardFilter >
 

        <CardFilterUsers text={'Contratantes'} quantid={3} isSelected/>
        <CardFilterUsers text={'Médicos'} quantid={3} />
      </ContainerCardFilter>
    <ContainerTble style={{ borderRadius: '0px 24px 24px 24px' }}>

    <ContainerFilter>
        <FilterSearch/>
        <AddButton>Novo Plano</AddButton>
        </ContainerFilter>

      <DataTable
        data={planos}
        columns={["Plano", "Valor", "Preço Promocional", "Situação", "Açãoes"]}
      />
      </ContainerTble>
    </>
  );
};

export default Plans;
