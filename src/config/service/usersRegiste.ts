import { AxiosResponse } from "axios";
import api from "./config";

export const usersRegister = async () => {
  try {
    const response: AxiosResponse<any> = await api.get(`users`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const userData = response.data;
    return userData;
  } catch (e) {
    console.log("Erro ao encontrar usuários:", e);
    return null;
  }
};
