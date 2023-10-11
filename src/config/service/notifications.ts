
import { AxiosResponse } from "axios";
import api from "./config";

export const getNotifications = async () => {
  try {
    const response: AxiosResponse<any> = await api.get(`notifications`, {
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

export const createNotifications = async (notificationData: any) => {
  try {
    const response = await api.post(`notifications`, notificationData, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.log("Erro ao criar notificação:", error);
    return null;
  }
};


export const deleteNotifications = async (id: number | string) => {
  try {
    await api.delete(`notifications/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  } catch (error) {
    console.log("Erro ao excluir a notificação:", error);
    throw error;
  }
};
