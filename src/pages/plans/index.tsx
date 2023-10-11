import React from 'react';
import AddButton from "../../componets/Buttons/addButton";
import { CardFilterUsers } from "../../componets/cardFilterUsers";
import { ContDescription } from "../../componets/contetDescription";
import FilterSearch from "../../componets/filterSearch";
import DataTable from "../../componets/table";
import { ContainerTble } from "../dashBord/style";
import { ContainerCardFilter, ContainerFilter } from "../registeredUser/styled";

const Plans = () => {
  const [selectedTab, setSelectedTab] = React.useState('Contratantes'); // Inicialmente, 'Contratantes' está selecionado

  const planos = [
    {
      plano: "Plano A",
      valor: 100.0,
      precoPromocional: 80.0,
      situacao: true,
      categoria: 'Contratantes', // Categoria do plano
    },
    {
      plano: "Plano B",
      valor: 150.0,
      precoPromocional: 120.0,
      situacao: false,
      categoria: 'Contratantes', // Categoria do plano
    },
    {
      plano: "Plano C",
      valor: 120.0,
      precoPromocional: 100.0,
      situacao: true,
      categoria: 'Médicos', // Categoria do plano
    },
    {
      plano: "Plano D",
      valor: 180.0,
      precoPromocional: 150.0,
      situacao: false,
      categoria: 'Médicos', // Categoria do plano
    },
  ];

  // Função para filtrar os planos com base na categoria
  const filteredPlanos = (categoria:string) => {
    return planos.filter((plano) => plano.categoria === categoria);
  };



  return (
    <>
      <ContDescription description="Planos" text="" />

      <ContainerCardFilter>
        <CardFilterUsers
          text="Contratantes"
          isSelected={selectedTab === 'Contratantes'}
          onClick={() => setSelectedTab('Contratantes')}
          quantid={5}
        />
        <CardFilterUsers
          text="Médicos"
          isSelected={selectedTab === 'Médicos'}
          onClick={() => setSelectedTab('Médicos')
          
        }
        quantid={0}
        />
      </ContainerCardFilter>
      <ContainerTble style={{ borderRadius: '0px 24px 24px 24px' }}>
        <ContainerFilter>
          <FilterSearch />
          <AddButton>Novo Plano</AddButton>
        </ContainerFilter>

        <DataTable
          data={filteredPlanos(selectedTab)}
          columns={["Plano", "Valor", "Preço Promocional", "Situação", "Ações"]}
        />
      </ContainerTble>
    </>
  );
};

export default Plans;
