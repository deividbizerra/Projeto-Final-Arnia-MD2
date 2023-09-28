
import { Link } from "react-router-dom";
import AddButton from "../../componets/Buttons/addButton";
import { ContDescription } from "../../componets/contetDescription";
import FilterSearch from "../../componets/filterSearch";

import DataTable from "../../componets/table";
import TablePagination from "../../componets/tableWithPaginationProps";
import { ContainerTble } from "../dashBord/style";
import { ContainerFilter } from "../registeredUser/styled";




const Especialidades = [
  {
    nomeEspecialidade: "Neurologia",
    situacao: true,
  },
  {
    nomeEspecialidade: "Neurologia",
    situacao: true,
  },
  {
    nomeEspecialidade: "Neurologia",
    situacao: true,
  },
  {
    nomeEspecialidade: "Neurologia",
    situacao: true,
  },
  {
    nomeEspecialidade: "Neurologia",
    situacao: true,
  },
  {
    nomeEspecialidade: "Neurologia",
    situacao: true,
  },
  {
    nomeEspecialidade: "Neurologia",
    situacao: true,
  },
  {
    nomeEspecialidade: "Neurologia",
    situacao: true,
  },

];


const Specialties = () => {
   
  return (
    <>
     
      <ContDescription description="Especialidades" />
      <ContainerTble style={{marginTop:"32px" }}>

        <ContainerFilter>
        <FilterSearch/>
        <Link to="/home/new-specialty"><AddButton>Nova Especialidade</AddButton></Link>
        

        </ContainerFilter>
      <TablePagination
          data={Especialidades}
          itemsPerPage={7}
          renderTable={(displayedData) => (
            <DataTable
              data={displayedData}
              columns={["Nome especialidade", "Situação", "Açãoes"]}
            />
          )}    
        />
       
      </ContainerTble>
    </>
  );
};

export default Specialties;
