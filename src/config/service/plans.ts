import { AxiosResponse } from "axios";
import api from "./config";

export const getPlans = async () => {
  try {
    const response: AxiosResponse = await api.get(`plans`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const userData = response.data;
    console.log(userData)
    return userData;
  } catch (e) {
    console.log("Erro ao buscar dados:", e);
    return null;
  }
};