import { Input } from "../../componets/ui/input/styled";
import { ContainerTble } from "../dashBord/style"
import { H1 } from "../newSpecialty/styled"
import { BoxDddressData, BoxPersonalData } from "./styled";


const UserData = () => {
  return (
    <div>
      

      <ContainerTble>
       <div>
        <div>
        <H1>Dados Pessoais</H1>

        <BoxPersonalData>
        <Input label="Primeiro nome"/>
        <Input label="Sobrenome"/>
        <Input label="E-mail"/>
        <Input label="WhatsApp"/>
        </BoxPersonalData>

        <H1>Endereço</H1>
         <BoxDddressData>
         <Input label="Cep"/>
        <Input label="Rua"/>
        <Input label="Número"/>
        <Input label="Bairro"/>
        <Input label="Cidade"/>
        <Input label="Estado"/>
        <Input label="Complemento"/>
        </BoxDddressData>


        <H1>Dados do currículo</H1>
        <div>

        <Input label="Especialidades"/>
        <Input label="Cidade que deseja trabalhar"/>
        <Input label="Locais de trabalho"/>
        </div>
        </div>
       </div>
      </ContainerTble>
    </div>
  )
}

export default UserData
