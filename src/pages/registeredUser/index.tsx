import { useState } from 'react';
import { CardFilterUsers } from '../../componets/cardFilterUsers';
import { ContDescription } from '../../componets/contetDescription';
import DataTable from '../../componets/table';
import { ContainerTble } from '../dashBord/style';
import { ContainerCardFilter } from './styled';
import TablePagination from '../../componets/tableWithPaginationProps';
type Propps = {
  usuario:string
  email:string 
  whatsapp:string 
  tipoUsuario:string
  especialidade:string
  cidade:string
  estado:string
}

export const dadosUsuarios:Propps[] = [
  {
    usuario: "João",
    email: "joao@example.com",
    whatsapp: "+55 123456789",
    tipoUsuario: "Cliente",
    especialidade:"Médicos",
    cidade:"irece",
    estado:"bahia"
  },
  {
    usuario: "Maria",
    email: "maria@example.com",
    whatsapp: "+55 987654321",
    tipoUsuario: "Administrador",
    especialidade:"Médicos",
    cidade:"irece",
    estado:"bahia"
  },
  {
    usuario: "Marcos",
    email: "marcos@example.com",
    whatsapp: "+55 987654321",
    tipoUsuario: "Administrador",
    especialidade:"Médicos",
    cidade:"irece",
    estado:"bahia"
  },
  
  {
    usuario: "Marcos",
    email: "marcos@example.com",
    whatsapp: "+55 987654321",
    tipoUsuario: "Administrador",
    especialidade:"Contratantes",
    cidade:"irece",
    estado:"bahia"
  },
  
  {
    usuario: "Marcos",
    email: "marcos@example.com",
    whatsapp: "+55 987654321",
    tipoUsuario: "Administrador",
    especialidade:"Contratantes",
    cidade:"irece",
    estado:"bahia"
  },
  
  {
    usuario: "Marcos",
    email: "marcos@example.com",
    whatsapp: "+55 987654321",
    tipoUsuario: "Administrador",
    especialidade:"Contratantes",
    cidade:"irece",
    estado:"bahia"
  },
    
  {
    usuario: "Marcos",
    email: "marcos@example.com",
    whatsapp: "+55 987654321",
    tipoUsuario: "Administrador",
    especialidade:"Medico",
    cidade:"irece",
    estado:"bahia"
  },
  
  {
    usuario: "Deivid souza",
    email: "deivid@example.com",
    whatsapp: "+55 987654321",
    tipoUsuario: "Administrador",
    especialidade:"Programador",
    cidade:"irece",
    estado:"bahia"
  },

];
const UserCadrast = () => {
  const [descriptionText, setDescriptionText] = useState('Todos');
  const [filteredData, setFilteredData] = useState(dadosUsuarios);

  const handleFilter = (tipoUsuario: string) => {
    setDescriptionText(tipoUsuario);
    if (tipoUsuario === 'Todos') {
      setFilteredData(dadosUsuarios);
    } else {
      // Filtrar os dados com base no tipo de usuário selecionado
      const filtered = dadosUsuarios.filter((user) => user.especialidade === tipoUsuario);
      setFilteredData(filtered);
    }
  };
  return (
    <>
      <ContDescription description="Usuários Cadastrado |" text={descriptionText} />
      <ContainerCardFilter>
      <CardFilterUsers text={'Todos'} quantid={100} onClick={() => handleFilter('Todos')} isSelected={descriptionText === 'Todos'} />
<CardFilterUsers text={'Contratantes'} quantid={100} onClick={() => handleFilter('Contratantes')} isSelected={descriptionText === 'Contratantes'} />
<CardFilterUsers text={'Médicos'} quantid={100} onClick={() => handleFilter('Médicos')} isSelected={descriptionText === 'Médicos'} />

      </ContainerCardFilter>
      <ContainerTble style={{ borderRadius: '0px 24px 24px 24px' }}>
      
        <TablePagination
          data={filteredData}
          itemsPerPage={7}
          renderTable={(displayedData) => (
            <DataTable
              data={displayedData}
              columns={['Usuário', 'E-mail', 'WhatsApp', 'Especialidade', 'Cidade', 'Estado', 'Tipo de Usuário']}
            />
          )}
        />
      </ContainerTble>
    </>
  );
};

export default UserCadrast;
