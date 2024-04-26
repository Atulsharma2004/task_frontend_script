import React from "react";
import logo from "../assets/img/logo13.jpg";

const Navbar = () => {
  return (
    <>
      <header className="shadow mb-2 sticky top-0 z-10 bg-white">
        <div className="relative flex max-w-screen-2xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
          <a
            href="#"
            className=" flex items-center whitespace-nowrap text-2xl font-black"
          >
            <span className="mr-1 text-4xl text-blue-600">
              <img
                src={logo}
                alt="logo"
                className="md:h-20 md:w-64 h-12 w-16"
              />
            </span>
            <span className="text-black md:text-4xl text-lg">LOGO</span>
          </a>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute top-7 right-7 cursor-pointer md:hidden"
            for="navbar-open"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <div className="relative  xl:ml-32 lg:ml-24 m-auto md:mt-auto mt-2 w-1/2">
            <div className="absolute inset-y-0 start-0 flex items-center  ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          <nav
            aria-label="Header Navigation"
            className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-8 md:max-h-full md:flex-row md:items-start navbar2 "
          >
            <ul className="flex flex-col w-full items-center justify-between space-y-2  md:flex-row md:space-y-0 menu2">
              <li className="text-gray-600 md:mr-4 nav-item nav-item-font w-full flex flex-col justify-center items-center ">
                <a
                  href="#"
                  className="effect-shine md:text-lg text-md font-bold"
                >
                  Home
                </a>
              </li>

              <li className="text-gray-600 md:mr-4 nav-item nav-item-font w-full flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="effect-shine md:text-lg text-md font-bold"
                >
                  About Us
                </a>
              </li>

              <li className="text-gray-600 md:mr-4 nav-item nav-item-font w-full flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="effect-shine md:text-lg text-md font-bold"
                >
                  Products
                </a>
              </li>

              <li className="text-gray-600 md:mr-4 nav-item nav-item-font w-full flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="effect-shine md:text-lg text-md font-bold"
                >
                  Contact Us
                </a>
              </li>
              <li className="text-gray-600 md:mr-4 w-full nav-item-font flex items-center justify-center">
                <button className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
