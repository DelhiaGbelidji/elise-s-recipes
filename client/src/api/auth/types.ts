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

//API
export type Type_api_register = {
  username: string;
  email: string;
  password: string;
};

export type Type_api_login = Type_login;
