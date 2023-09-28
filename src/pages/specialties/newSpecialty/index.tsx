import { useState } from "react";
import { IOSSwitch } from "../../../componets/switch";
import { Input } from "../../../componets/ui/input/styled";
import { ContainerTble } from "../../dashBord/style";
import { ContainerNews, H1 } from "./styled";
import { ButtonSave } from "../../../componets/Buttons/saveButton/styled";
import ReturnButton from "../../../componets/return";

const Newspecialty = () => {
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <ReturnButton link="/home/specialties">Nova especialidade</ReturnButton>

      <ContainerTble>
        <H1>Dados da especialidade</H1>

        <ContainerNews>
          <Input
            label="Nome"
            name="name"
            style={{ width: "35%" }}
            className="inputtesteste"
          />

          <div>
            <p>Situação</p>
            <IOSSwitch
              sx={{ m: 1 }}
              checked={checked}
              onChange={handleSwitchChange}
            />
            <span>{checked ? "Ativo" : "Inativo"}</span>
          </div>
        </ContainerNews>

        <ButtonSave>Salvar</ButtonSave>
      </ContainerTble>
    </>
  );
};

export default Newspecialty;
