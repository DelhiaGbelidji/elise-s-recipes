import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Type_login } from "../../api/auth/types";
import { useMutationLogin } from "../../api/auth";
import { OAuth } from "..";

const Schema_login = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string().required("Please enter your password"),
});

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Type_login>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver<Type_login>(Schema_login),
  });

  const { mutateAsync: mutateLogin, isLoading } = useMutationLogin() || {};

  // Form submission handler
  const onSubmit = async (values: Type_login) => {
    try {
      await mutateLogin(values);
      navigate("/dashboard");
    } catch {
      setErrorMessage("Login failed, please check your credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div>
        <Label value="Your email" />
        <Controller
          name="email"
          control={control}
          render={({ field: { ...field } }) => (
            <TextInput
              {...field}
              placeholder="jane@doe.com"
              type="email"
              helperText={errors.email?.message}
            />
          )}
        />
      </div>
      <div>
        <Label value="Your password" />
        <Controller
          name="password"
          control={control}
          render={({ field: { ...field } }) => (
            <TextInput
              {...field}
              type="password"
              helperText={errors.password?.message}
            />
          )}
        />
      </div>
      <div className="input-wrapper">
        <Button
          gradientDuoTone="purpleToPink"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </div>
      <OAuth />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
};
