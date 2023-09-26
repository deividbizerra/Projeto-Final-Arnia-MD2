import { BoxCardFilter } from "./style";

type CardFilterUsersProps = {
  text: string;
  quantid: number;
  onClick?: () => void; 
};

export const CardFilterUsers: React.FC<CardFilterUsersProps> = ({ text, quantid, onClick }) => {
  return (
    <BoxCardFilter onClick={onClick}>
      <p>{text}</p>
      <span>{quantid}</span>
    </BoxCardFilter>
  );
}