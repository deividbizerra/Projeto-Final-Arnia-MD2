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
    console.log(userData);
    return userData;
  } catch (e) {
    console.log("Erro ao buscar dados:", e);
    return null;
  }
};

export const createPlanos = async (specialtyData: any) => {
  try {
    const response = await api.post(`plans`, specialtyData, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.log("Erro ao criar plano:", error);
    return null;
  }
};

export const deletePlans = async (id: number | string) => {
  try {
    await api.delete(`plans/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  } catch (error) {
    console.log("Erro ao excluir o plano:", error);
    throw error;
  }
};

export const updatePlans = async (id: any, updatedData: any) => {
  try {
    const response = await api.put(`plans/${id}`, updatedData, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const updatedPlans = response.data;
    return updatedPlans;
  } catch (error) {
    console.log("Erro ao atualizar planos");
    throw error;
  }
};

export const getPlansById = async (id: number | string) => {
  try {
    const response = await api.get(`plans/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    return response.data; // Retorne os dados da especialidade
  } catch (error) {
    console.log("Erro ao buscar a planos:", error);
    throw error;
  }
};
