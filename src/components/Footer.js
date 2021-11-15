import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mb-5 px-5 md:px-10 lg:px-20 relative z-10 flex items-end justify-between md:items-center mx-auto max-w-sreen-lg xl:max-w-screen-xl">
      <div className="flex flex-col md:flex-row justify-end items-end text-xs text-gray-500 font-medium tracking-wider">
        <a
          href="https://epranka.com"
          target="_blank"
          title="Edvinas Pranka | Senior Developer"
          rel="noreferrer"
          className="block mb-3 sm:mb-0 sm:mr-5 font-bold"
        >
          Epranka.com
        </a>
        <a
          href="https://github.com/epranka/runway-app"
          target="_blank"
          rel="noreferrer"
          className="block mb-3 sm:mb-0 sm:mr-5"
        >
          GitHub
        </a>
        <Link
          to="/policy/terms-of-usage"
          className="block mb-3 sm:mb-0 sm:mr-5"
        >
          Terms of usage
        </Link>
        <Link to="/policy/cookies" className="block mb-3 sm:mb-0 sm:mr-5">
          Cookies
        </Link>
        <Link to="/contacts" className="block sm:mr-5">
          Contacts
        </Link>
      </div>
      <div className="text-sm text-gray-500 text-right">
        We are using the{" "}
        <a
          href="https://airportdb.io"
          target="_blank"
          rel="noreferrer"
          className="font-semibold"
        >
          Airportdb.io
        </a>
      </div>
    </div>
  );
}
