import { useState, ChangeEvent, FormEvent } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { StyledButton } from "../../componets/ui/button/styled";
import { Input } from "../../componets/ui/input/styled";
import { CheckboxLogin, ContainerLogin, Form } from "./styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ApiLogin } from "../../config/service/login";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
    }

    if (!password) {
      setPasswordError(true);
    }

    if (email && password) {
      try {
        const loginSuccess = await ApiLogin(email, password);

        if (loginSuccess) {
          toast("Login efetuado com sucesso!");

          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } else {
          toast.error(
            "Login falhou: Usuário não encontrado ou senha incorreta."
          );
        }
      } catch (error) {
        toast.error("Erro ao fazer login!");
      }
    }
  };

  return (
    <ContainerLogin>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <div>
          <p>Seja bem vindo!</p>
          <h1>Realize seu Login</h1>
        </div>

        <Input
          variant="outlined"
          label="E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? <small>Campo obrigatório!</small> : ""}
          className="custom-input"
        />
        <Input
          variant="outlined"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={passwordError ? <small>Campo obrigatório!</small> : ""}
          className="custom-input"
        />
        <CheckboxLogin>
          <FormControlLabel control={<Checkbox />} label="Lembrar-me" />
          <p>Esqueci minha senha</p>
        </CheckboxLogin>

        <StyledButton variant="MAIN" type="submit">
          Entrar
        </StyledButton>
      </Form>
    </ContainerLogin>
  );
};

export default Login;
