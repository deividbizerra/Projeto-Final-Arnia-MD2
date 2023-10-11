import React, { useState } from "react";
import { Tabela } from "./styled";
import { FormControlLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  ContainerIcons,
  DeleteIconStyled,
  EditIconStyled,
  VisibilityIconStyled,
} from "../ui/icons/styled";
import { IOSSwitch } from "../switch";
import ModalDeleted from "../modalDeleted";

interface DataTableProps {
  data: Record<string, string | number | boolean>[];
  columns: string[];
}
const columnMapping: Record<string, string> = {
  Usuário: "name",
  "E-mail": "email",
  WhatsApp: "whatsapp",
  "Tipo de Usuário": "tipoUsuario",
  Especialidade: "specialties",
  Cidade: "city",
  state: "estado",
  Plano: "plano",
  Valor: "valor",
  "Preço Promocional": "precoPromocional",
  Situação: "situacao",
  "Nome especialidade": "nomeEspecialidade",
  Título: "titulo",
  "Data de envio": "dataDeEnvio",
};

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  const [modalStates, setModalStates] = useState<Record<number, boolean>>({});

  const openModal = (rowIndex: number) => {
    setModalStates((prevState) => ({
      ...prevState,
      [rowIndex]: true,
    }));
  };

  const closeModal = (rowIndex: number) => {
    setModalStates((prevState) => ({
      ...prevState,
      [rowIndex]: false,
    }));
  };

  return (
    <Tabela>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={`${rowIndex}-${columnIndex}`}>
                {row[columnMapping[column]]}
                {column === "Situação" ? (
                  <FormControlLabel
                    control={
                      <IOSSwitch
                        sx={{ m: 1 }}
                        checked={
                          row[columnMapping[column]] === false ? false : true
                        }
                      />
                    }
                    label={
                      row[columnMapping[column]] === true ? "Ativo" : "Inativo"
                    }
                  />
                ) : column === "Ações" ? (
                  <>
                    <IconButton aria-label="Visualizar">
                      <ContainerIcons>
                        <VisibilityIconStyled />
                      </ContainerIcons>
                    </IconButton>

                    <IconButton aria-label="Editar">
                      <ContainerIcons>
                        <EditIconStyled />
                      </ContainerIcons>
                    </IconButton>

                    <IconButton
                      aria-label="Excluir"
                      onClick={() => openModal(rowIndex)}
                    >
                      <ContainerIcons>
                        <DeleteIconStyled />
                      </ContainerIcons>
                    </IconButton>

                    <ModalDeleted
                      isOpen={modalStates[rowIndex]}
                      onClose={() => closeModal(rowIndex)}
                      onDelete={() => {
                
                        closeModal(rowIndex);
                      }}
                    />
                  </>
                ) : (
                  row[column]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Tabela>
  );
};

export default DataTable;
