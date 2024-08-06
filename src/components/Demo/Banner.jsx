/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { UpdateFollower } from "react-mouse-follower";
import Fanta1 from "../assets/gold.png";
import Fanta2 from "../assets/silver.png";
import Fanta3 from "../assets/bronze.png";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";
import "./banner.css";
import DemoHeader from "./DemoHeader";
import Navbar from "./Navbar";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Fanta1,
    title: "On subjects that Interest you",
    subtitle: "Share your Thoughts",

    modal: "Write",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "By Reading  ",
    subtitle: "Fuel Your Curiosity",

    modal: "Read",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Cola",
    subtitle: "Share to Friends",

    modal: "Share",
    bgColor: "#ac1a00",
  },
];

const Banner = () => {
  const [activeData, setActiveData] = useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <motion.section
          initial={{ backgroundColor: activeData.bgColor }}
          animate={{ backgroundColor: activeData.bgColor }}
          transition={{ duration: 0.8 }}
          className="bg-brandDark text-white"
        >
          {/* navbar components */}
          {/* <Navbar /> */}
          {/* <DemoHeader /> */}

          <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px] items-center">
            {/* ______ Headphone Info ______ */}
            <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
              <div className="space-y-5 text-center md:text-left">
                <AnimatePresence mode="wait">
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 9999,
                      followSpeed: 0.5,
                      rotate: -720,
                      mixBlendMode: "difference",
                      scale: 10,
                    }}
                  >
                    <motion.h1
                      key={activeData.id}
                      variants={SlideRight(0.2)}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                    >
                      {activeData.subtitle}
                    </motion.h1>
                  </UpdateFollower>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeData.id}
                    variants={SlideRight(0.4)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-2xl leading-loose text-white/80"
                  >
                    {activeData.title}
                  </motion.p>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: activeData.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      rotate: -720,
                      scale: 6,
                      backgroundElement: (
                        <div>
                          <img src={activeData.image} />
                        </div>
                      ),
                    }}
                  ></UpdateFollower>
                </AnimatePresence>

                {/* ______ Headphone List Separator ______ */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeInOut",
                  }}
                  className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
                >
                  <div className="w-20 h-[1px] bg-white"></div>
                  <p className="uppercase text-sm ">Blog Your Experience</p>
                  <div className="w-20 h-[1px] bg-white"></div>
                </motion.div>

                {/* Headphone list switcher */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeInOut",
                  }}
                  className="grid grid-cols-3 gap-1"
                >
                  {headphoneData.map((item) => {
                    return (
                      <UpdateFollower
                        mouseOptions={{
                          backgroundColor: item.bgColor,
                          zIndex: 9999,
                          followSpeed: 0.5,
                          scale: 5,
                          text: "Next Slide",
                          textFontSize: "3px",
                        }}
                      >
                        <div
                          key={item.id}
                          onClick={() => handleActiveData(item)}
                          className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                        >
                          <div className="flex justify-center">
                            <img
                              src={item.image}
                              alt=""
                              className={`w-[80px] img-shadow ${
                                activeData.image === item.image
                                  ? "opacity-100 scale-110"
                                  : "opacity-50"
                              }`}
                            />
                          </div>
                        </div>
                      </UpdateFollower>
                    );
                  })}
                </motion.div>
              </div>
            </div>

            {/* ______ Hero Image ______ */}
            <div className="flex flex-col justify-end items-center relative order-1 md:order-2 ">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeData.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                  exit={{
                    opacity: 0,
                    // scale: 0.9,
                    x: -100,

                    transition: {
                      duration: 0.4,
                    },
                  }}
                  src={activeData.image}
                  alt=""
                  className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
                />
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                  exit={{
                    opacity: 0,
                    // scale: 0.9,

                    transition: {
                      duration: 0.4,
                    },
                  }}
                  className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                >
                  {activeData.modal}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.section>
      </UpdateFollower>
    </main>
  );
};

export default Banner;
{
  /* <Carousel>
        
        <div className="bg-banner border-b border-black">
          <div className="size py-[5rem] flex flex-col items-start gap-[1rem]">
            <h1 className="font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal">
              Page 02
            </h1>
            <p className="w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button
              className="btn bg-black1 rounded-full text-white !text-[1.2rem] !px-6 !mt-[2.5rem]"
              onClick={() => {
                window.location.href = "/start-reading";
              }}
            >
              Explore Topics
            </button>
          </div>
        </div>
        <div className="bg-banner border-b border-black">
          <div className="size py-[5rem] flex flex-col items-start gap-[1rem]">
            <h1 className="font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal">
              Page 03
            </h1>
            <p className="w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button
              className="btn bg-black1 rounded-full text-white !text-[1.2rem] !px-6 !mt-[2.5rem]"
              onClick={() => {
                window.location.href = "/start-reading";
              }}
            >
              Explore Topics
            </button>
          </div>
        </div>
      </Carousel> */
}
