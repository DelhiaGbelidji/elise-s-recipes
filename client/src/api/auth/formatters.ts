import {
  Type_api_login,
  Type_api_register,
  Type_login,
  Type_register,
} from "./types";

export const formatRegisterData = (data: Type_register): Type_api_register => {
  return {
    username: data.username,
    email: data.email,
    password: data.password,
  };
};
export const formatLoginData = (crendentials: Type_login): Type_api_login => {
  return crendentials;
};
