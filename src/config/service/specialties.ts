import { AxiosResponse } from "axios";
import api from "./config";

export const getSpecialties = async () => {
  try {
    const response: AxiosResponse = await api.get(`specialties`, {
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



export const createSpecialty = async (specialtyData:Specialty) => {
  try {
    const response = await api.post(`specialties`, specialtyData, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.log("Erro ao criar especialidade:", error);
    return null;
  }
};

export const deleteSpecialty = async (id: number | string) => {
  try {
    await api.delete(`specialties/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  } catch (error) {
    console.log("Erro ao excluir a especialidade:", error);
    throw error;
  }
};



export const updateSpecialty = async (id: number, updatedData: Specialty) => {
  try {
    const response = await api.put(`specialties/${id}`, updatedData, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const updatedSpecialty = response.data; 
    return updatedSpecialty;
  } catch (error) {
    console.log("Erro ao atualizar a especialidade:", error);
    throw error;
  }
};

export const getSpecialtyById = async (id: number | string) => {
  try {
    const response = await api.get(`specialties/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    return response.data; // Retorne os dados da especialidade
  } catch (error) {
    console.log("Erro ao buscar a especialidade:", error);
    throw error;
  }
};
