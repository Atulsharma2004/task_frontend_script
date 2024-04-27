// import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
// import { BsFillSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-bg pt-32 pb-12">
      <div className="hidden md:block"></div>
      <div className="inside"></div>
      <div className="inside-footer flex md:flex-row flex-col container-main xl:gap-12 gap-8  px-12 ">
        <div className="row1 w-full md:w-1/4">
          <div className="logo-footer text-3xl font-bold text-white mb-8">
            TheLogo
          </div>
          <div className="text-footer text-white text-md mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            facere quos sed?
          </div>
          <div className="link-footer flex gap-4 text-2xl text-white">
            <span className="social-icon ">
              <FaFacebook />
            </span>
            <span className="social-icon ">
              <AiFillInstagram />
            </span>
            <span className="social-icon ">
              <FaTwitterSquare />
            </span>
          </div>
        </div>
        <div className="row2 w-full md:w-1/4">
          <div className="up-footer text-2xl text-white md:mb-8 mb-4">
            Useful Links
          </div>
          <div className="down-footer flex lg:gap-20 gap-12">
            <div className="left-footer text-white text-md">
              <ul>
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                <Link to={"/about"}>
                  <li>About Us</li>
                </Link>
                <Link to={"/services"}>
                  <li>Services</li>
                </Link>
                <Link to={"/projects"}>
                  <li>Projects</li>
                </Link>
              </ul>
            </div>
            <div className="right-footer text-white text-md">
              <ul>
                <Link to={"/"}>
                  <li>FAQ's</li>
                </Link>
                <Link to={"/"}>
                  <li>Privacy Policy</li>
                </Link>
                <Link to={"/"}>
                  <li>News</li>
                </Link>

                <Link to={"/contact"}>
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="row3 w-full md:w-1/4 text-white">
          <h3 className="text-white text-2xl md:mb-8 mb-4">Contact</h3>
          <ul>
            <li className="flex  gap-2 text-md">
              <span className="mt-1">
                <IoLocationSharp />
              </span>
              <span>
                9 Ramnarayan Itwala VIT Bhati, near Prakash Store, Goregaon
                East, Mumbai Suburban, Maharashtra, 400063
              </span>
            </li>
            <li className="flex items-center gap-2 text-md">
              <span>
                <FaPhoneAlt />
              </span>
              <span>(+91) 9876 01801</span>
            </li>
            <li className="flex items-center gap-2 text-md">
              <span>
                <FaPhoneAlt />
              </span>
              <span>(+91) 98760 34431</span>
            </li>
            <li className="flex items-center gap-2 text-md">
              <span>
                <MdEmail />
              </span>
              <span>test@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="row4 w-full md:w-1/4">
          <div className="head-footer text-2xl text-white md:mb-8 mb-4">
            Newsletter
          </div>
          <div className="text-footer text-md text-white mb-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            facere..
          </div>
          <div className="form-footer ">
            <form action="">
              <div className="input-footer flex">
                <input
                  type="email"
                  className="px-4 py-2 border border-white-1 bg-transparent"
                  placeholder="Subscribe to our..."
                />
                <div className="border border-orange-1 flex items-center justify-center text-white text-xl bg-orange-700 w-12 cursor-pointer">
                  <FaArrowRight />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
