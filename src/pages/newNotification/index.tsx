import { TextField } from "@mui/material";
import ReturnButton from "../../componets/return"
import { Input } from "../../componets/ui/input/styled"
import { ContainerTble } from "../dashBord/style"
import { ContainerNewSpecialty } from "./styled";
import { ButtonSave } from "../../componets/Buttons/saveButton/styled";
import { H1 } from "../newSpecialty/styled";
import Modal from "../../componets/modalSave";
import { useState } from "react";


const NewNotification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveClick = () => {
    // Lógica de salvar a pergunta
    // Após salvar com sucesso, abrir o modal
    setIsModalOpen(true);
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
          />

            <Input
            type="date"
            name="name"
            style={{ width: "35%" }}
            className="inputtesteste"
            
          />
        </ContainerNewSpecialty>
        <TextField
        id="outlined-multiline-static"
        label="Texto"
        multiline
        rows={4} // Defina o número de linhas desejado
        variant="outlined"
        style={{width: '830px' }}
      />
       <ButtonSave onClick={handleSaveClick}>Salvar</ButtonSave>
      </ContainerTble>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Notificação salva com sucesso!</h2>
      </Modal>
    </div>
  )
}

export default NewNotification
