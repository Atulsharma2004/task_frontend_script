import React from "react";
import Carousel from "../Components/Carousel.jsx";

const Home = () => {
  const slides = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
  ];
  return (
    <div className=" md:w-[60%] w-full  m-auto mt-2 mb-4 ">
      <Carousel slides={slides} />
    </div>
  );
};

export default Home;
