import { AxiosResponse } from "axios";
import api from "./config";

export const usersRegister = async () => {
  try {
    const response: AxiosResponse = await api.get(`users`, {
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


export const userSearch = async (searchs: string | null) => {
  try {
    let search = "";
    if (searchs) {
      search = `search=${searchs}`; 
    }
    const response: AxiosResponse = await api.get(`users?${search}`, {
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


