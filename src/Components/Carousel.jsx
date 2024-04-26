import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";

import { FaCircleArrowRight } from "react-icons/fa6";

const Carousel = ({ slides, autoplay = true, interval = 4000 }) => {
  let [current, setCurrent] = useState(0);
  let [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (autoplay && !isMoving) {
      const timerId = setInterval(() => {
        nextSlide();
      }, interval);

      return () => clearInterval(timerId);
    }
  }, [current, autoplay, isMoving, interval]);

  const prevSlide = () => {
    setIsMoving(true);
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
    setTimeout(() => setIsMoving(false), 400);
  };

  const nextSlide = () => {
    setIsMoving(true);
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
    setTimeout(() => setIsMoving(false), 400);
  };

  return (
    <div className="overflow-hidden relative  md:h-[620px] h-full w-full">
      <div
        className={`flex transition ease-out duration-400 w-full h-full ${
          isMoving ? "transition-paused" : ""
        }`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((im, index) => {
          return (
            <img
              src={im}
              alt="image"
              key={index}
              className="h-full w-full object-cover bg-no-repeat bg-center"
            />
          );
        })}
      </div>
      <div className="absolute top-0 left-0   md:h-[620px] h-full w-full bg-black/75 text-white ">
        <div className="md:w-1/2 w-5/6 md:mt-60 sm:mt-32 mt-16 m-auto ">
          <h1 className="md:text-5xl text-xl text-center font-bold md:mb-4 mb-6">
            This is the Beautiful Slider Created by me.
          </h1>
          <p className="md:text-lg  text-md font-md text-center sm:block hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            numquam possimus illum quis minus explicabo non labore alias. Ullam,
            asperiores.
          </p>
        </div>
      </div>
      <div className="absolute top-0 h-full w-full justify-between flex items-center text-white md:px-10 px-5 md:text-3xl text-xl">
        <button onClick={prevSlide}>
          <FaCircleArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <FaCircleArrowRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((im, i) => {
          return (
            <div
              onClick={() => {
                setIsMoving(true);
                setCurrent(i);
                setTimeout(() => setIsMoving(false), 400);
              }}
              key={"circle" + i}
              className={`rounded-full md:w-5 md:h-5 w-2 h-2 cursor-pointer ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
