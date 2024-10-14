import { Footer as FB_Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <FB_Footer
      container
      className="border border-t-1 border-gray-300 rounded-none"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-2">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl dark:text-white"
              aria-label="Elise's Recipes - Home"
            >
              <span className="px-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400">
                Elise's Recipes
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-3 sm:gap-6">
            <div>
              <FB_Footer.Title title="About" />
              <FB_Footer.LinkGroup col>
                <FB_Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elise's recipes
                </FB_Footer.Link>
                <FB_Footer.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us{" "}
                </FB_Footer.Link>
              </FB_Footer.LinkGroup>
            </div>
            <div>
              <FB_Footer.Title title="Follow us" />
              <FB_Footer.LinkGroup col>
                <FB_Footer.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FB_Footer.Link>
                <FB_Footer.Link href="#">Linkedin</FB_Footer.Link>
              </FB_Footer.LinkGroup>
            </div>
            <div>
              <FB_Footer.Title title="Legal" />
              <FB_Footer.LinkGroup col>
                <FB_Footer.Link href="#">Privacy Policy</FB_Footer.Link>
                <FB_Footer.Link href="#">Terms &amp; Conditions</FB_Footer.Link>
              </FB_Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FB_Footer.Copyright
            href="#"
            by="Elise's recipes"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </FB_Footer>
  );
};
