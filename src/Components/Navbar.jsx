import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo13.jpg";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import drop from "../assets/img/drop.jpg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 475); // Set breakpoint for mobile devices
    };

    handleResize(); // Initial check on mount

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleShowSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <header className="sticky top-0 shadow-md w-full h-20 nav-header px-2 md:px-4  bg-white">
        {/* desktop */}
        <div className="nav flex items-center h-full justify-between mr-4">
          <Link to={"/"}>
            <div className="logo h-16 ml-4 flex items-center">
              <img src={logo} alt="img_logo" className="h-full" />
              <h3 className="font-bold text-gray-800">LOGO</h3>
            </div>
          </Link>

          {isMobile ? (
            <div className="relative">
              <button onClick={handleShowSearch} className="focus:outline-none">
                <FaSearch className="text-slate-600 text-xl md:text-2xl" />
              </button>
              {showSearch && (
                <form className="absolute top-full -left-10 w-[180px] mt-2 px-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-full py-1 px-4"
                  />
                </form>
              )}
            </div>
          ) : (
            <form className="bg-white p-2 rounded-full flex items-center shadow-md">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none w-20 sm:w-40 lg:w-64 md:w-32 md:px-4 md:py-1 px-2 "
              />
              <button>
                <FaSearch className="text-slate-600 text-xl md:text-2xl" />
              </button>
            </form>
          )}

          <div className="flex items-center gap-4 md:gap-7">
            <nav>
              <ul className="hidden md:flex gap-4 md:gap-7 text-base md:text-lg nav-links">
                <li>
                  <a
                    href=""
                    className="nav-item nav-item-font md:text-lg font-bold text-gray-700"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="nav-item nav-item-font md:text-lg font-bold text-gray-700"
                  >
                    Menu
                  </a>
                  <div className="mega-box absolute left-0 top-[88px] px-[30px] py-0 w-[100%] ">
                    <div className="content-mega flex justify-between px-[40px] py-[25px]">
                      <div className="main-mega ">
                        <p className="md:text-xl font-bold text-gray-800">
                          Fruits
                        </p>
                        <ul className="mega-links ml-[-42px]">
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Apple
                            </a>
                          </li>
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Apple
                            </a>
                          </li>
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Apple
                            </a>
                          </li>
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Apple
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="main-mega">
                        <p className="md:text-xl font-bold text-gray-800">
                          Ice-Cream
                        </p>
                        <ul className="mega-links ml-[-42px]">
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Vanilla
                            </a>
                          </li>
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Vanilla
                            </a>
                          </li>
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Vanilla
                            </a>
                          </li>
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Vanilla
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="main-mega">
                        <p className="md:text-xl font-bold text-gray-800">
                          Pizza
                        </p>
                        <ul className="mega-links ml-[-42px]">
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Cheese
                            </a>
                          </li>
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Cheese
                            </a>
                          </li>
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Cheese
                            </a>
                          </li>
                          <li className="py-0 px-[20px]">
                            <a
                              href=""
                              className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 px-[20px] w-[80%] inline-block"
                            >
                              Cheese
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="main-mega">
                        <img src={drop} alt="dropdown_img" />
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    href=""
                    className="nav-item nav-item-font md:text-lg font-bold text-gray-700"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="nav-item nav-item-font md:text-lg font-bold text-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="text-2xl text-slate-600 relative cursor-pointer">
              <Link>
                <BsCartFill />
                <div className="absolute -top-2 -right-1 text-white bg-red-500 h-5 text-sm w-4  text-center rounded-full p-0 m-0">
                  0
                </div>
              </Link>
            </div>
            <div className=" text-slate-600 " onClick={handleShowMenu}>
              <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
                <FaRegUserCircle />
              </div>

              {/* Mobile width */}
              {showMenu && (
                <div className=" absolute top-14  right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                  <nav className="relative md:hidden sm:w-[200px] w-[170px]">
                    <ul className="flex flex-col text-base md:text-lg  nav-links">
                      <li className="px-2 py-1">
                        <a
                          href=""
                          className="nav-items nav-item-font md:text-lg font-bold text-gray-700"
                        >
                          Home
                        </a>
                      </li>
                      <li
                        className="px-2 py-1"
                        onClick={() => {
                          setShowDropdown(true);
                          setShowMenu(false);
                        }}
                      >
                        <span className="nav-items nav-item-font md:text-lg font-bold text-gray-700 cursor-pointer">
                          Menu
                        </span>
                        {showDropdown && (
                          <div
                            className="mega-box absolute right-[50%] top-[88px] md:px-[30px] sm:px-[40px] px-[20px]  sm:w-[140%] w-[100%] py-0 overflow-y-scroll h-[500px] scrollbar-hide"
                            onClick={() => {
                              setShowMenu(true);
                            }}
                            onBlur={() => {
                              setIsMobile(false);
                              setShowDropdown(false);
                            }}
                            tabIndex="0"
                          >
                            <div className="content-mega flex md:flex-row flex-col justify-between md:px-[40px] md:py-[25px]">
                              <div className="main-mega ">
                                <p className="sm:text-xl text-lg ml-4 font-bold text-gray-800">
                                  Fruits
                                </p>
                                <ul className="mega-links md:ml-[-42px] ml-[20px]">
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Apple
                                    </a>
                                  </li>
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Apple
                                    </a>
                                  </li>
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Apple
                                    </a>
                                  </li>
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Apple
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div className="main-mega">
                                <p className="sm:text-xl text-lg ml-4 font-bold text-gray-800">
                                  Ice-Cream
                                </p>
                                <ul className="mega-links md:ml-[-42px] ml-[20px]">
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Vanilla
                                    </a>
                                  </li>
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Vanilla
                                    </a>
                                  </li>
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Vanilla
                                    </a>
                                  </li>
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font md:text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Vanilla
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div className="main-mega">
                                <p className="sm:text-xl text-lg ml-4 font-bold text-gray-800">
                                  Pizza
                                </p>
                                <ul className="mega-links md:ml-[-42px] ml-[20px]">
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Cheese
                                    </a>
                                  </li>
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Cheese
                                    </a>
                                  </li>
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Cheese
                                    </a>
                                  </li>
                                  <li className="py-0 md:px-[20px]">
                                    <a
                                      href=""
                                      className="nav-items nav-item-font sm:text-lg text-md font-normal text-gray-700 py-0 md:px-[20px] w-[80%] inline-block"
                                    >
                                      Cheese
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div className="main-mega">
                                <img src={drop} alt="dropdown_img" />
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                      <li className="px-2 py-1">
                        <a
                          href=""
                          className="nav-items nav-item-font md:text-lg font-bold text-gray-700"
                        >
                          About
                        </a>
                      </li>
                      <li className="px-2 py-1">
                        <a
                          href=""
                          className="nav-items nav-item-font md:text-lg font-bold text-gray-700"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="px-2 py-1">
                        <a
                          href=""
                          className="nav-items nav-item-font md:text-lg font-bold text-gray-700"
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile */}
      </header>
    </>
  );
};

export default Navbar;
