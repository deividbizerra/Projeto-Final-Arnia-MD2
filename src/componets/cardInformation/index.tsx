import { BoxCardsUser, UserColor } from "./styled";

const CardsUserHome: React.FC<UserCardProps> = ({
  icon,
  title,
  content,
  variant,
}) => {
  return (
    <>
      <UserColor style={{ background: variant }}>{icon}</UserColor>
      <BoxCardsUser>
        <p>{title}</p>
        <h3>{content}</h3>
      </BoxCardsUser>
    </>
  );
};

export default CardsUserHome;
