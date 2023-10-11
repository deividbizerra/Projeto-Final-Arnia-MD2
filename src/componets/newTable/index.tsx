import { ReactNode } from "react";
import { Tabela } from "../table/styled";

type TableRow = Record<string, string | number | ReactNode>;

type TableProps = {
  columns: string[];
  data: TableRow[];
};

const Table = ({ columns, data }: TableProps) => {
  return (
    <Tabela>
      <thead>
        <tr>
          {columns.map((columnName, index) => (
            <th key={index}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((information, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(information).map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Tabela>
  );
};

export default Table;