import React from "react";
import { Tabela } from "./styled";
import { FormControlLabel} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ContainerIcons, DeleteIconStyled, EditIconStyled, VisibilityIconStyled } from "../ui/icons/styled";
import { IOSSwitch } from "../switch";
interface DataTableProps {
  data: Record<string, string | number | boolean>[];
  columns: string[];
}

const columnMapping: Record<string, string> = {
  Usuário: "usuario",
  "E-mail": "email",
  WhatsApp: "whatsapp",
  "Tipo de Usuário": "tipoUsuario",
  Especialidade: "especialidade",
  Cidade: "cidade",
  Estado: "estado",
  Plano: "plano",
  Valor: "valor",
  "Preço Promocional": "precoPromocional",
  Situação: "situacao",
  "Nome especialidade": "nomeEspecialidade"
};

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
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
                ) : column === "Açãoes" ? (
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

                        <IconButton aria-label="Excluir">
                    <ContainerIcons>
                      <DeleteIconStyled/>
                    </ContainerIcons>
                    </IconButton>
                  
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
