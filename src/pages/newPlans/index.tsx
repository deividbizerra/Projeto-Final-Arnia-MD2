import { useLocation} from "react-router-dom";
import ReturnButton from "../../componets/return";

const NewPlan = () => {
  const location = useLocation();
  const type = new URLSearchParams(location.search).get("type");

  // Converter o tipo selecionado para letras minúsculas
  const lowerCaseType = type.toLowerCase();

  return (
    <>
      <ReturnButton link="/home/plans">Novo - {lowerCaseType}</ReturnButton>
      <h1>Novo Plano</h1>
    </>
  );
};

export default NewPlan;
