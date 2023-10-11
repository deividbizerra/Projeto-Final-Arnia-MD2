import  { useEffect, useState } from 'react';
import { CardFilterUsers } from '../../componets/cardFilterUsers';
import { ContDescription } from '../../componets/contetDescription';
import { ContainerTble } from '../dashBord/style';
import { ContainerCardFilter } from './styled';
import { usersRegister } from '../../config/service/usersRegiste';
import Table from '../../componets/newTable';
import TablePagination from '../../componets/tableWithPaginationProps';
const UserCadrast = () => {
  const [descriptionText, setDescriptionText] = useState('Todos');
  const [,setUserData] = useState([]);
  const [userDataProcessed, setUserDataProcessed] = useState<ProcessedUserType[]>([]);
  const Columns = [
    'Usuário',
    'E-mail',
    'WhatsApp',
    'Especialidades',
    'Cidade',
    'Estado',
    'Tipo de usuário',
  ];
  const perPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const userDataResponse = await usersRegister();
        if (userDataResponse) {
          setUserData(userDataResponse.content);
          const dataTemp: ProcessedUserType[] = userDataResponse.content.map((item: UserType) => ({
            user: `${item.firstName} ${item.lastName}`,
            email: item.email,
            whatsapp: item.phone,
            specialties: item.specialties,
            city: item.city,
            state: item.state,
            userType: item.profiles.length > 0 ? item.profiles[0].name : '',
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

  const filteredData = userDataProcessed.filter((user) => {
    if (descriptionText === 'Todos') {
      return true;
    } else if (descriptionText === 'Contratantes') {
      return user.userType === 'CONTRATANTE';
    } else if (descriptionText === 'Médicos') {
      return user.userType === 'MEDICO';
    }
    return false;
  });

  return (
    <>
      <ContDescription description="Usuários Cadastrados |" text={descriptionText} />
      <ContainerCardFilter>
        <CardFilterUsers
          text={'Todos'}
          quantid={100}
          onClick={() => setDescriptionText('Todos')}
          isSelected={descriptionText === 'Todos'}
        />
        <CardFilterUsers
          text={'Contratantes'}
          quantid={100}
          onClick={() => setDescriptionText('Contratantes')}
          isSelected={descriptionText === 'Contratantes'}
        />
        <CardFilterUsers
          text={'Médicos'}
          quantid={100}
          onClick={() => setDescriptionText('Médicos')}
          isSelected={descriptionText === 'Médicos'}
        />
      </ContainerCardFilter>
      <ContainerTble style={{ borderRadius: '0px 24px 24px 24px' }}>
        <TablePagination
          data={filteredData}
          itemsPerPage={perPage}
          renderTable={(displayedData) => (
            <Table columns={Columns} data={displayedData} />
          )}
        />
      </ContainerTble>
    </>
  );
};

export default UserCadrast;
