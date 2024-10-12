// FRONT
export type Type_register = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type Type_login = {
  email: string;
  password: string;
};

export type Type_user = {
  id: string;
  email: string;
  username: string;
};

//API
export type Type_api_register = {
  username: string;
  email: string;
  password: string;
};

export type Type_api_login = Type_login;

export type Type_api_user = {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  token: string;
};
