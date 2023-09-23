import { UserColor } from "./styled";

const CardsUserHome: React.FC<UserCardProps> = ({
  icon,
  title,
  content,
  variant,
}) => {
  return (
    <>
      <UserColor style={{ background: variant }}>{icon}</UserColor>
      <div>
        <p>{title}</p>
        <h3>{content}</h3>
      </div>
    </>
  );
};

export default CardsUserHome;
