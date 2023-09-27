

import { ContDescription } from "../../componets/contetDescription";
import DataTable from "../../componets/table";
import TablePagination from "../../componets/tableWithPaginationProps";
import { ContainerTble } from "../dashBord/style";




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
