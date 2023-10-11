import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSpecialtyById, updateSpecialty } from "../../config/service/specialties";
import { IOSSwitch } from "../../componets/switch";
import { Input } from "../../componets/ui/input/styled";
import { ContainerTble } from "../dashBord/style";
import { ButtonSave } from "../../componets/Buttons/saveButton/styled";
import ReturnButton from "../../componets/return";
import Modal from "../../componets/modalSave";
import { ContainerNews, H1 } from "../newSpecialty/styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Specialty {
  id: number;
  name: string;
  enabled: boolean;
}

const EditSpecialty = () => {
  const { id } = useParams<{ id: string }>();
  const [specialty, setSpecialty] = useState<Specialty | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const [specialtyName, setSpecialtyName] = useState<string>("");

  useEffect(() => {
    if (id === undefined) {
      // Lide com o caso em que id não está definido, por exemplo, redirecione o usuário ou mostre uma mensagem de erro.
    } else {
      const fetchSpecialty = async () => {
        try {
          const response = await getSpecialtyById(Number(id));
          setSpecialty(response);
          setSpecialtyName(response.name);
          setChecked(response.enabled);
          setLoading(false);
        } catch (error) {
          console.log("Erro ao buscar a especialidade:", error);
        }
      };

      fetchSpecialty();
    }
  }, [id]);

  const validateFields = () => {
    if (!specialtyName) {
      toast.error("O campo 'Nome' é obrigatório.");
      return false;
    }

    return true;
  };

  const handleSaveClick = async () => {
    if (!specialty) return;

    if (validateFields()) {
      try {
        const updatedSpecialty: Specialty = {
          ...specialty,
          name: specialtyName,
          enabled: checked,
        };

        await updateSpecialty(updatedSpecialty.id, updatedSpecialty);
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
          navigate(`/home/specialties`);
        }, 1500);
      } catch (error) {
        console.log("Erro ao atualizar a especialidade:", error);
        toast.error("Ocorreu um erro ao atualizar a especialidade. Por favor, tente novamente.");
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

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!specialty) {
    return <div>Especialidade não encontrada</div>;
  }

  return (
    <>
      <ReturnButton link="/home/specialties">Voltar</ReturnButton>

      <ContainerTble>
        <H1>Editar Especialidade</H1>

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
        <h2>Especialidade atualizada com sucesso!</h2>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default EditSpecialty;
