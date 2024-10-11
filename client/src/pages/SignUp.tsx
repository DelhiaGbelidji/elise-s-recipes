import { Link } from "react-router-dom";
import { RegisterForm } from "../components/forms/RegisterForm";

export const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl"
            aria-label="Elise's Recipes - Home"
          >
            <span className="px-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400">
              Elise's Recipes
            </span>
          </Link>
          <p className="text-sm mt-5 text-gray-500">
            Looking for new recipe ideas? Our food-loving community brings you a
            variety of creative and easy-to-make dishes, perfect for sharing
            with friends and family.
          </p>
        </div>
        <div className="flex-1">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
