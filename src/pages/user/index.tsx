import { useEffect, useState } from "react";
import { ContDescription } from "../../componets/contetDescription";
import ButtonProfile from "../../componets/Buttons/profileEditing";
import { ApiFindUser } from "../../config/service/login";
import { BoxProfile, ContainerProfile } from "./styled";
import { DeleteIconStyled, EditIconStyled } from "../../componets/ui/icons/styled";

const ProfileEditing = () => {
  const [activeSection, setActiveSection] = useState("dados"); 
  const [userData, setUserData] = useState<UserData>();

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data: UserData = await ApiFindUser();
        if (data) {
          setUserData(data);
        }
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário:", error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div>
      <ContDescription description="Edição de Perfil" />

      <ContainerProfile>
        <div>
          <ButtonProfile
            onClick={() => handleButtonClick("dados")}
            children="Dados"
            isSelected={activeSection === "dados"}
          />

          <ButtonProfile
            onClick={() => handleButtonClick("alterarSenha")}
            children="Alterar Senha"
            isSelected={activeSection === "alterarSenha"}
          />

          <ButtonProfile
            onClick={() => handleButtonClick("administradores")}
            children="Administradores"
            isSelected={activeSection === "administradores"}
          />
        </div>

        <div>
          {activeSection === "dados" && (
            /* Conteúdo a ser exibido quando "Dados" estiver ativo */
            <div>
              <h2> Dados</h2>

              <BoxProfile >
                <h3>Nome</h3>
                <p>{userData?.firstName}</p>
                <EditIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
              </BoxProfile>

              <hr />
              <BoxProfile>
                <h3>Email</h3>
                <p>{userData?.email}</p>
                <EditIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
              </BoxProfile>
              <hr />
            </div>
          )}

          {activeSection === "alterarSenha" && (
            /* Conteúdo a ser exibido quando "Alterar Senha" estiver ativo */
            <div>
              <h2>Alterar Senha</h2>
              <BoxProfile>
                <h3>Senha</h3>
                <p>***********</p>
                <EditIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
              </BoxProfile>
              <hr />
              <BoxProfile>
                <h3>Nova senha</h3>
                <p>**********</p>
                <EditIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
              </BoxProfile>
              <hr />
            </div>
          )}

          {activeSection === "administradores" && (
            /* Conteúdo a ser exibido quando "Administradores" estiver ativo */
            <div>
              <h2>Administradores</h2>
              <BoxProfile>
                <h3>Bruno</h3>
                <p>bruno@gmail.com</p>
                <div style={{display:"flex", gap:"8px"}}>
                <EditIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
                <DeleteIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
                </div>
                
              </BoxProfile>
              <hr />
              <BoxProfile>
                <h3>Júlio</h3>
                <p>julio@gmail.com</p>
                <div style={{display:"flex", gap:"8px"}}>
                <EditIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
                <DeleteIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
                </div>
              </BoxProfile>
              <hr />
              <BoxProfile>
                <h3>Mariana</h3>
                <p>maria@gmail.com</p>
                <div style={{display:"flex", gap:"8px"}}>
                <EditIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
                <DeleteIconStyled style={{width: "20px", marginTop:"20px", cursor:"pointer"}}/>
                </div>
              </BoxProfile>
              <hr />
            </div>
          )}
        </div>
      </ContainerProfile>
    </div>
  );
};

export default ProfileEditing;
