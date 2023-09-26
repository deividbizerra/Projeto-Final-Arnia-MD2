import { CardFilterUsers } from "../../componets/cardFilterUsers";
import { ContDescription } from "../../componets/contetDescription";
import DataTable from "../../componets/table";
import { ContainerTble } from "../dashBord/style";
import { ContainerCardFilter } from "../registeredUser/styled";



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
        <CardFilterUsers text={'Contratantes'} quantid={3} />
        <CardFilterUsers text={'Médicos'} quantid={3} />
      </ContainerCardFilter>
    <ContainerTble style={{ borderRadius: '0px 24px 24px 24px' }}>
      <DataTable
        data={planos}
        columns={["Plano", "Valor", "Preço Promocional", "Situação", "Açãoes"]}
      />
      </ContainerTble>
    </>
  );
};

export default Plans;
