import { TextField } from "@mui/material";
import ReturnButton from "../../componets/return";
import { Input } from "../../componets/ui/input/styled";
import { ContainerTble } from "../dashBord/style";
import { ButtonSave } from "../../componets/Buttons/saveButton/styled";
import { H1 } from "../newSpecialty/styled";
import Modal from "../../componets/modalSave";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getNotificationsById,
  updateNotification,
} from "../../config/service/notifications";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { ContainerNewSpecialty } from "../newNotification/styled";

const EditNotification: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const type: string | null = new URLSearchParams(location.search).get("type");
  const planId = new URLSearchParams(location.search).get("id");
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sendingDate, setSendingDate] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing plan data
    if (planId) {
      getNotificationsById(planId).then((planData: NotificationData) => {
        if (planData) {
          setTitle(planData.title);
          setMessage(planData.message);

          // Converter e formatar a data
          const formattedDate = format(
            parseISO(planData.sendingDate),
            "yyyy-MM-dd"
          );
          setSendingDate(formattedDate);
        } else {
          // Handle error when fetching data
          console.error("Error fetching plan data.");
        }
      });
    }
  }, [planId]);

  const handleSaveClick = async (): Promise<void> => {
    if (title === "" || message === "") {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const newNotificationData: NotificationData = {
        type: type,
        title: title,
        message: message,
        sendingDate: sendingDate,
      };

      if (planId) {
        const response = await updateNotification(planId, newNotificationData);
        if (response) {
          toast.success("Plano atualizado com sucesso!");
          setIsModalOpen(true);
          setTimeout(() => {
            setIsModalOpen(false);
            navigate("/home/notifications");
          }, 1500);
        } else {
          toast.error("Erro ao atualizar o plano. Tente novamente.");
        }
      } else {
        toast.error("ID do notificação não encontrada.");
      }
    } catch (error) {
      console.error("Erro ao atulizar notificação:", error);
    }
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ReturnButton link="/home/notifications">Nova notificação</ReturnButton>
      <ContainerTble>
        <H1>Dados da notificação</H1>
        <ContainerNewSpecialty>
          <Input
            label="Titulo"
            name="name"
            style={{ width: "35%" }}
            className="inputtesteste"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <TextField
            type="date"
            style={{ width: "35%" }}
            onChange={(e) => setSendingDate(e.target.value)}
            value={sendingDate}
          />
        </ContainerNewSpecialty>
        <TextField
          id="outlined-multiline-static"
          label="Texto"
          multiline
          rows={4}
          variant="outlined"
          style={{ width: "830px" }}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <ButtonSave onClick={handleSaveClick}>Salvar</ButtonSave>
      </ContainerTble>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Notificação salva com sucesso!</h2>
      </Modal>
    </div>
  );
};

export default EditNotification;
