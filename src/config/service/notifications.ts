import { AxiosResponse } from "axios";
import api from "./config";

export const getNotifications = async (filterType: string) => {
  try {
    const response = await api.get(`notifications`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      params: {
        type: filterType,
      },
    });

    const userData = response.data;
    return userData;
  } catch (e) {
    console.log("Erro ao buscar dados:", e);
    return null;
  }
};

type Props = {
  id?: number;
  type: string | null;
  title: string;
  message: string;
  sendingDate: string;
};

export const createNotifications = async (notificationData: Props) => {
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

export const getNotificationsById = async (id: number | string) => {
  try {
    const response = await api.get(`notifications/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    return response.data; // Retorne os dados da especialidade
  } catch (error) {
    console.log("Erro ao buscar a notificação:", error);
    throw error;
  }
};

export const updateNotification = async (
  id: number,
  updatedData: ProcessedNotification
): Promise<ProcessedNotification | null> => {
  try {
    const response: AxiosResponse = await api.put(
      `notifications/${id}`,
      updatedData,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const updatedPlans: ProcessedNotification = response.data;
    return updatedPlans;
  } catch (error) {
    console.log("Erro ao atualizar a  notificação", error);
    throw error;
  }
};
