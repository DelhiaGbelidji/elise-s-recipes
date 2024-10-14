import { createContext, useState, ReactNode, useEffect } from "react";
import { Type_user } from "../api/auth/types";
import { useGetCurrentUser } from "../api/auth";

interface UserContextType {
  user: Type_user | null;
  setUser: (user: Type_user | null) => void;
  isLoading: boolean;
  isError: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<Type_user | null>(null);
  const { data, isLoading, isError } = useGetCurrentUser();

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        setUser(data); // Utilisateur récupéré avec succès
      } else {
        setUser(null); // Aucune donnée, l'utilisateur n'est pas authentifié
      }
    }
  }, [isLoading, data]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, isError }}>
      {children}
    </UserContext.Provider>
  );
};
