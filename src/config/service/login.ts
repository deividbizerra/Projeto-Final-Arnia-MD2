import { AxiosResponse, isAxiosError } from "axios";
import api from "./config";
import { toast } from "react-toastify";

type loginApi = {
  token: string;
};

export const ApiLogin = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const response: AxiosResponse<loginApi> = await api.post(
      `public/register/login?email=${email}&password=${password}`
    );

    const token = response.data.token;
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = token;

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 404) {
        toast("Usuario não encontrado!");
      }
      if (error.status === 401) {
        toast("Senha incorreta!");
      }
      if (error.status === 403) {
        toast("Erro ao buscar API!");
      }
    }

    return false;
  }
};

export const ApiFindUser = async () => {
  try {
    const response: AxiosResponse<any> = await api.get(`me`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const userData = response.data;
    return userData;
  } catch (e) {
    console.logr("Erro ao verificar o usuário:", e);
    return null;
  }
};
