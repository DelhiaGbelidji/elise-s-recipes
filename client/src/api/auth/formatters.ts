import {
  Type_api_login,
  Type_api_register,
  Type_api_user,
  Type_login,
  Type_register,
  Type_user,
} from "./types";

export const formatCurrentUserData = (data: Type_api_user): Type_user => {
  return {
    id: data.id,
    username: data.username,
    email: data.username,
  };
};

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
