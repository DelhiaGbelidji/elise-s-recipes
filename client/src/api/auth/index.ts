/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  formatCurrentUserData,
  formatGoogleData,
  formatLoginData,
  formatRegisterData,
} from "./formatters";
import { getCurrentUser, google, login, registerUser } from "./services";
import { Type_api_user, Type_google, Type_login, Type_register } from "./types";
import toast from "react-hot-toast";

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getCurrentUser,
    select: (data) => {
      return formatCurrentUserData(data);
    },
  });
};

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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: Type_login) => {
      return login(formatLoginData(credentials));
    },
    onSuccess: async (data: Type_api_user) => {
      const { token } = data;

      localStorage.setItem("access_token", token);
      await queryClient.invalidateQueries(["me"]);
    },
  });
};

export const useMutationGoogle = () => {
  return useMutation({
    mutationFn: (data: Type_google) => {
      return google(formatGoogleData(data));
    },
    onSuccess: (data: Type_api_user) => {
      const { token } = data;
      localStorage.setItem("access_token", token);
    },
  });
};
