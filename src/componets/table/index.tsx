import { Tabela } from "./styled";



// Dados de exemplo para preencher a tabela
const dadosUsuarios = [
  {
    usuario: "João",
    email: "joao@example.com",
    whatsapp: "+55 123456789",
    tipoUsuario: "Cliente",
  },
  {
    usuario: "Maria",
    email: "maria@example.com",
    whatsapp: "+55 987654321",
    tipoUsuario: "Administrador",
  },
  {
    usuario: "Carlos",
    email: "carlos@example.com",
    whatsapp: "+55 111111111",
    tipoUsuario: "Cliente",
  },
  {
    usuario: "Carlos",
    email: "carlos@example.com",
    whatsapp: "+55 111111111",
    tipoUsuario: "Cliente",
  },
];

const UsersTable = () => {
  return (
    <Tabela>
      <thead>
        <tr>
          <th>Usuário</th>
          <th>E-mail</th>
          <th>WhatsApp</th>
          <th>Tipo de Usuário</th>
        </tr>
      </thead>
      <tbody>
        {dadosUsuarios.map((usuario, index) => (
          <tr key={index}>
            <td>{usuario.usuario}</td>
            <td>{usuario.email}</td>
            <td>{usuario.whatsapp}</td>
            <td>{usuario.tipoUsuario}</td>
          </tr>
        ))}
      </tbody>
    </Tabela>
  );
};

export default UsersTable;
