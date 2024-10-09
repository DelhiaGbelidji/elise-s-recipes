import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const path = useLocation().pathname;

  // Fonction pour rendre les liens du menu de manière dynamique
  const renderNavLink = (to: string, label: string) => (
    <Navbar.Link active={path === to} as={"div"}>
      <Link to={to}>{label}</Link>
    </Navbar.Link>
  );

  return (
    <Navbar>
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl dark:text-white"
        aria-label="Elise's Recipes - Home"
      >
        <p className="px-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400">
          Elise's Recipes
        </p>
      </Link>
      <form aria-label="Search recipes">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          aria-label="Search"
        />
      </form>
      <Button
        className="lg:hidden"
        outline
        gradientDuoTone="pinkToOrange"
        aria-label="Search"
      >
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          color="gray"
          className="hidden sm:inline"
          aria-label="Toggle dark mode"
        >
          <WiMoonAltThirdQuarter />
        </Button>
        <Link to="/signin" aria-label="Sign in">
          <Button gradientDuoTone="pinkToOrange" pill>
            Sign in
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {renderNavLink("/", "Home")}
        {renderNavLink("/about", "About")}
        {renderNavLink("/recipes", "Recipes")}
      </Navbar.Collapse>
    </Navbar>
  );
};
