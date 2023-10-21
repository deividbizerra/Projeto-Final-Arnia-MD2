import { ReactNode } from "react";
import { Tables } from "./styled";

type TableRow = Record<string, string | number | ReactNode>;

type TableProps = {
  columns: string[];
  data: TableRow[];
};

const Table = ({ columns, data }: TableProps) => {
  return (
    <Tables>
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
    </Tables>
  );
};

export default Table;
