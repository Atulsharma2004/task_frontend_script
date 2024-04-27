import React, { useEffect, useState } from "react";
import "../App.css";
import { FaCircleArrowLeft } from "react-icons/fa6";

import { FaCircleArrowRight } from "react-icons/fa6";

const Carousel = ({ slides, autoplay = true, interval = 4000 }) => {
  let [current, setCurrent] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${slides[current].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (current === 2) {
  //       setCurrent(0);
  //     } else {
  //       setCurrent(current + 1);
  //     }
  //     return () => clearTimeout(timer);
  //   }, 5000);
  // }, [current]);
  useEffect(() => {
    if (autoplay) {
      const timer = setTimeout(() => {
        setCurrent((current + 1) % slides.length);
      }, interval);

      return () => clearTimeout(timer);
    }
  }, [current, autoplay, interval, slides.length]);

  // const nextSlide = (current) => {
  //   setCurrent(current);
  // };
  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current + slides.length - 1) % slides.length);
  };
  return (
    <>
      <div className="container-style md:h-[600px] h-[350px]">
        <div
          style={bgImageStyle}
          className="h-full transition-all ease-out delay-150"
        ></div>
        <div className="transparent-back"></div>

        <div className="description md:w-1/2 w-3/4 md:top-[20%] md:left-[10%] sm:top-[25%] sm:left-[15%] top-[10%] left-[5%]">
          <div>
            <h1 className="md:text-5xl text-3xl md:mb-8 mb-4">
              {slides[current].title}
            </h1>
            <p className="md:text-lg text-md">{slides[current].body}</p>
          </div>
          <div className="carousel-boullt  mt-8 flex md:justify-center justify-start items-center">
            {slides.map((slide, index) => (
              <span
                key={index}
                onClick={() => nextSlide(current)}
                className={`${
                  index === current ? "active bg-white" : "bg-gray-500"
                } md:w-[45px] md:h-[12px] w-[25px] h-[8px]`}
              ></span>
            ))}
          </div>
          <div className="carousel-arrows flex justify-between md:mt-12 mt-8 md:text-4xl text-2xl text-blue-400">
            <FaCircleArrowLeft onClick={prevSlide} className="cursor-pointer" />
            <FaCircleArrowRight
              onClick={nextSlide}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
