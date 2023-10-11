import { AxiosResponse } from "axios";
import api from "./config";

export const usersDashBoard = async () => {
  try {
    const response: AxiosResponse<any> = await api.get(`users/dashboard`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const userData = response.data;
    return userData;
  } catch (e) {
    console.log("Erro ao buscar dados:", e);
    return null;
  }
};
