import { TextField } from "@mui/material";
import ReturnButton from "../../componets/return";
import { Input } from "../../componets/ui/input/styled";
import { ContainerTble } from "../dashBord/style";
import { ContainerNewSpecialty } from "./styled";
import { ButtonSave } from "../../componets/Buttons/saveButton/styled";
import { H1 } from "../newSpecialty/styled";
import Modal from "../../componets/modalSave";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  createNotifications,
} from "../../config/service/notifications";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";

type Props = {
  id?: number;
  type: string | null;
  title: string;
  message: string;
  sendingDate: string;
};

const NewNotification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const type = new URLSearchParams(location.search).get("type");

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [sendingDate, setSendingDate] = useState("");
  const navigate = useNavigate();



  const handleSaveClick = async () => {
    if (title === "" || message === "") {
      alert("Preencha todos os campos.");
      return false;
    }

    try {
      // Formate a data para o formato ISO 8601 (exemplo: "2023-10-08T11:48:36.784+00:00")
      const formattedSendingDate = format(
        parseISO(sendingDate),
        "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
      );

      const newNotificationData: Props = {
        type: type,
        title: title,
        message: message,
        sendingDate: formattedSendingDate, // Data formatada
      };

      const response = await createNotifications(newNotificationData);

      if (response) {
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
          navigate("/home/notifications");
        }, 1500);
      }
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao criar o plano. Por favor, tente novamente."
      );
      console.error("Erro ao criar plano:", error);
    }
  };

  const handleCloseModal = () => {
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
          />

          <Input
            type="date"
            name="name"
            style={{ width: "35%" }}
            className="inputtesteste"
            onChange={(e) => setSendingDate(e.target.value)}
          />
        </ContainerNewSpecialty>
        <TextField
          id="outlined-multiline-static"
          label="Texto"
          multiline
          rows={4} // Defina o número de linhas desejado
          variant="outlined"
          style={{ width: "830px" }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ButtonSave onClick={handleSaveClick}>Salvar</ButtonSave>
      </ContainerTble>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Notificação salva com sucesso!</h2>
      </Modal>
    </div>
  );
};

export default NewNotification;
