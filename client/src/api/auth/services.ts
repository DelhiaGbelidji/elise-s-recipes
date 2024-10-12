import axios from "axios";
import { Type_api_login, Type_api_register } from "./types";
import { Auth, URL_BASE } from "../../utils/paths";

export const registerUser = async (data: Type_api_register) => {
  const response = await axios.post(`${URL_BASE}${Auth.REGISTER}`, data, {});
  return response.data;
};

export const login = async (credentials: Type_api_login) => {
  const response = await axios.post(`${URL_BASE}${Auth.LOGIN}`, credentials, {});
  return response.data;
};
