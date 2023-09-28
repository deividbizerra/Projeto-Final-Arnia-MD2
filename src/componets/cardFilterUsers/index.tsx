import { BoxCardFilter } from "./style";

type CardFilterUsersProps = {
  text: string;
  quantid: number;
  onClick?: () => void;
  isSelected?: boolean;
};

export const CardFilterUsers: React.FC<CardFilterUsersProps> = ({
  text,
  quantid,
  onClick,
  isSelected,
}) => {
  return (
    <BoxCardFilter onClick={onClick} isSelected={isSelected}>
      <p>{text}</p>
      <span>{quantid}</span>
    </BoxCardFilter>
  );
};
