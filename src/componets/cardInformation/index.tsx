import { BoxCardsUser, ContainerUsers, UserColor } from "./styled";

const CardsUserHome: React.FC<UserCardProps> = ({
  icon,
  title,
  content,
  variant,
}) => {
  return (
    <ContainerUsers className="containerUser">
      <UserColor style={{ background: variant }}>{icon}</UserColor>
      <BoxCardsUser>
        <p>{title}</p>
        <h3>{content}</h3>
      </BoxCardsUser>
    </ContainerUsers>
  );
};

export default CardsUserHome;
