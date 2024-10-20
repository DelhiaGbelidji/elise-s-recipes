import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Type_register } from "../../api/auth/types";
import { useMutationRegistereUser } from "../../api/auth";
import { OAuth } from "..";

const Schema_register = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .trim("The username cannot include spaces")
    .strict(true)
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must contain 8 characters, one uppercase, one lowercase, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password") // Ajout d'un message d'erreur
    .oneOf([Yup.ref("password")], "Passwords must match"), // Vérifie si confirmPassword correspond à password
});

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Type_register>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver<Type_register>(Schema_register),
  });

  const { mutateAsync: mutateRegister, isLoading } =
    useMutationRegistereUser() || {};

  // Form submission handler
  const onSubmit = async (values: Type_register) => {
    try {
      await mutateRegister(values);
      navigate("/signin");
    } catch {
      throw new Error("Something went wrong during registration");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div>
        <Label value="Your username" />
        <Controller
          name="username"
          control={control}
          render={({ field: { ...field } }) => (
            <TextInput
              {...field}
              placeholder="Jane doe"
              type="text"
              helperText={errors.username?.message}
            />
          )}
        />
      </div>
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
      <div>
        <Label value="Confirm your password" />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { ...field } }) => (
            <TextInput
              {...field}
              type="password"
              helperText={errors.confirmPassword?.message}
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
            "Sign Up"
          )}
        </Button>
      </div>
      <OAuth />
    </form>
  );
};
