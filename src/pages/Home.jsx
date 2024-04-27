import React from "react";
import Carousel from "../Components/Carousel.jsx";
import sl1 from "../assets/img/sl1.webp";
import sl2 from "../assets/img/sl2.jpg";
import sl3 from "../assets/img/sl3.jpg";

const Home = () => {
  const slides = [
    {
      url: sl1,
      title: "Title1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, numquam possimus illum quis minus explicabo non labore alias. Ullam,  asperiores.",
    },
    {
      url: sl2,
      title: "Title1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, numquam possimus illum quis minus explicabo non labore alias. Ullam,  asperiores.",
    },
    {
      url: sl3,
      title: "Title1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, numquam possimus illum quis minus explicabo non labore alias. Ullam,  asperiores.",
    },
  ];
  return <Carousel slides={slides} />;
};

export default Home;
