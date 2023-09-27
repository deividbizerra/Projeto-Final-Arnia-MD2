import React from "react";
import { Tabela } from "./styled";
import { FormControlLabel, Switch, SwitchProps } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { ContainerIcons, DeleteIconStyled, EditIconStyled, VisibilityIconStyled } from "../ui/icons/styled";
interface DataTableProps {
  data: Record<string, string | number | boolean>[];
  columns: string[];
}
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const columnMapping: Record<string, string> = {
  Usuário: "usuario",
  "E-mail": "email",
  WhatsApp: "whatsapp",
  "Tipo de Usuário": "tipoUsuario",
  Especialidade: "especialidade",
  Cidade: "cidade",
  Estado: "Estado",
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
