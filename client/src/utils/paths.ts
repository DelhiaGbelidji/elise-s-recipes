import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

//AUTH
export enum Auth {
  REGISTER = "auth/register",
  LOGIN = "auth/login",
  GOOGLE = "auth/google",
  ME = "auth/me",
}
