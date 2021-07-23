import clsx from "clsx";
import React, { useCallback, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navBarRef = useRef(null);
  const location = useLocation();

  const handleMenuToggle = useCallback(() => {
    setMobileMenuOpen((state) => !state);
  }, []);

  const handleItemClick = useCallback((e) => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div
      className={clsx("z-20 fixed justify-center top-0 left-0 right-0", {
        "bottom-0": mobileMenuOpen,
        "bg-white":
          mobileMenuOpen ||
          (!location.pathname.startsWith("/airport/") &&
            location.pathname !== "/"),
      })}
      ref={navBarRef}
    >
      <div className="px-5 md:px-10 lg:px-20 mx-auto max-w-sreen-lg xl:max-w-screen-xl">
        <div className="flex items-center justify-between py-4">
          {location.pathname !== "/" ? (
            <Link
              to="/"
              className="flex items-center text-sm font-semibold"
              onClick={handleItemClick}
            >
              <img
                className="w-10"
                src="/logo-small.png"
                alt="which runway to choose logo small"
              />
              <div className="ml-3">Which runway to choose?</div>
            </Link>
          ) : (
            <span></span>
          )}
          {location.pathname !== "/" ? (
            <button
              onClick={handleMenuToggle}
              className="inline-block md:hidden w-8 h-8 text-gray-600 p-1 -mr-1 focus:outline-none"
            >
              <svg
                fill="black"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          ) : null}
          <nav
            className={clsx(
              "fixed md:relative top-20 left-0 bottom-0 md:top-0 w-full bg-white md:flex flex-col md:flex-row md:w-auto bg-white",
              {
                flex: mobileMenuOpen,
                hidden: !mobileMenuOpen,
              }
            )}
          >
            <>
              {location.pathname !== "/contacts" &&
              location.pathname !== "/" ? (
                <Link
                  to="/contacts"
                  onClick={handleItemClick}
                  className="font-semibold text-sm ml-5 md:ml-0"
                >
                  Contacts
                </Link>
              ) : null}
            </>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
