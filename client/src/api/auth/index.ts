/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { formatLoginData, formatRegisterData } from "./formatters";
import { login, registerUser } from "./services";
import { Type_login, Type_register } from "./types";
import toast from "react-hot-toast";

export const useMutationRegistereUser = () => {
  return useMutation({
    mutationFn: (user: Type_register) => {
      return registerUser(formatRegisterData(user));
    },
    onSuccess: () => {
      toast.success("You have been successfuly registered");
    },
    onError: (err: any) => {
      toast.error("Something went wrong");
      return err;
    },
  });
};

export const useMutationLogin = () => {
  return useMutation({
    mutationFn: (credentials: Type_login) => {
      return login(formatLoginData(credentials));
    },
  });
};
