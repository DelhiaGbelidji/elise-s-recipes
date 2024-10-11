import { Link } from "react-router-dom";
import { RegisterForm } from "../components/forms/RegisterForm";

export const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 flex flex-col md:flex-row items-center gap-8">
        <div className="text-center md:text-left md:flex-1">
          <Link
            to="/"
            className="font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400"
            aria-label="Elise's Recipes - Home"
          >
            Elise's Recipes
          </Link>
          <p className="mt-5 text-gray-600 text-sm md:text-base max-w-md">
            Looking for new recipe ideas? Our food-loving community brings you a
            variety of creative and easy-to-make dishes, perfect for sharing
            with friends and family.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full md:w-96">
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Sign up
            <span role="img" aria-label="burger">
              🍔
            </span>
          </h2>
          <RegisterForm />
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <Link
                to="/signin"
                className="font-medium text-pink-600 hover:text-pink-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
