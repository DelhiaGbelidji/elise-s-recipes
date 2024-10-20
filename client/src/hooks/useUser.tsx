import { useContext } from "react";
import { UserContext } from "../contexts/UserContext"; // Assure-toi que le chemin est correct

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
console.log(context)
  return context;
};
