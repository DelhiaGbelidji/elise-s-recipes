import { Type_api_login, Type_api_register } from "./types";
import { api, Auth } from "../../utils/paths";

export const registerUser = async (data: Type_api_register) => {
  const response = await api.post(Auth.REGISTER, data);
  return response.data;
};

export const login = async (credentials: Type_api_login) => {
  const response = await api.post(Auth.LOGIN, credentials);
  return response.data;
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("access_token");

  const response = await api.get(Auth.ME, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
