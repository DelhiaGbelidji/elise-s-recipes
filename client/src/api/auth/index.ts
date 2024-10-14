/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { formatRegisterData } from "./formatters";
import { registerUser } from "./services";
import { Type_register } from "./types";
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
