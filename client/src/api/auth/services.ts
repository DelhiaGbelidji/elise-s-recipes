import axios from "axios";
import { Type_api_register } from "./types";
import { Auth, URL_BASE } from "../paths";

export const registerUser = async (data: Type_api_register) => {
  const response = await axios.post(`${URL_BASE}${Auth.REGISTER}`, data, {});
  return response.data;
};
