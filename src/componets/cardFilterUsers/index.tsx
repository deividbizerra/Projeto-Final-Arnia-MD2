import theme from "../../assets/styles/theme";
import { BoxCardFilter } from "./style";

type CardFilterUsersProps = {
  text: string;
  quantid: number;
  onClick?: () => void;
  isSelected?: boolean;
};

export const CardFilterUsers: React.FC<CardFilterUsersProps> = ({ text, quantid, onClick, isSelected }) => {
  const backgroundColor = isSelected ? '#ffffff' : theme.colors.whiteice;

  return (
    <BoxCardFilter onClick={onClick} style={{ backgroundColor}}>
      <p>{text}</p>
      <span>{quantid}</span>
    </BoxCardFilter>
  );
}