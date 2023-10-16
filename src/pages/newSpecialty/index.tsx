import { useState } from "react";
import { IOSSwitch } from "../../componets/switch";
import { Input } from "../../componets/ui/input/styled";
import { ContainerTble } from "../dashBord/style";
import { ContainerNews, H1 } from "./styled";
import { ButtonSave } from "../../componets/Buttons/saveButton/styled";
import ReturnButton from "../../componets/return";
import Modal from "../../componets/modalSave";
import { createSpecialty } from "../../config/service/specialties";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Specialty {
  name: string;
  enabled: boolean;
}

const Newspecialty = () => {
  const [checked, setChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [specialtyName, setSpecialtyName] = useState<string>("");

  const validateFields = () => {
    if (!specialtyName) {
      toast.error("O campo 'Nome' é obrigatório.");
      return false;
    }

    return true;
  };

  const handleSaveClick = async () => {
    if (validateFields()) {
      try {
        const specialtyData: Specialty = {
          name: specialtyName,
          enabled: checked,
        };

        const response = await createSpecialty(specialtyData);

        if (response) {
          setIsModalOpen(true);
        }
        setTimeout(() => {
          setIsModalOpen(false);
          navigate('/home/specialties');
        }, 1500);
      } catch (error) {
        console.error("Erro ao criar especialidade:", error);
        toast.error("Ocorreu um erro ao criar a especialidade. Por favor, tente novamente.");
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSwitchChange = () => {
    setChecked(!checked);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpecialtyName(event.target.value);
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
            value={specialtyName}
            onChange={handleNameChange}
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

        <ButtonSave onClick={handleSaveClick}>Salvar</ButtonSave>
      </ContainerTble>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Especialidade salva com sucesso!</h2>
      </Modal>

      <ToastContainer /> 
    </>
  );
};

export default Newspecialty;
