import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useUser } from "../../hooks/useUser";
import { UserDropDown } from "..";
import { toggleTheme } from "../../utils/theme/themeSlice";

export const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { user } = useUser();

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
        <span className="px-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400">
          Elise's Recipes
        </span>
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
        pill
        gradientDuoTone="pinkToOrange"
        aria-label="Search"
      >
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="sm:inline p-0"
          pill
          gradientDuoTone="pinkToOrange"
          onClick={() => dispatch(toggleTheme())}
        >
          <WiMoonAltThirdQuarter />
        </Button>
        <>
          {user ? (
            <UserDropDown user={user} />
          ) : (
            <Link to="/signin" aria-label="Sign in">
              <Button gradientDuoTone="pinkToOrange" pill>
                Sign in
              </Button>
            </Link>
          )}
        </>
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
