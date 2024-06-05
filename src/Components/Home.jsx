import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { GrNext } from "react-icons/gr";
import "../index.css";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Home() {
  return (
    <div
      name='home'
      className=' home w-full h-screen flex justify-center items-center'
    >
      <div className=" flex flex-col items-center  justify-around h-full   w-full  ">
        <div className=' text-white flex flex-col justify-center lg:items-start items-center h-full lg:mb-[-5%] ]  w-[80%]  lg:w-[50%]   '>
          <div >
            <h1 className='animate__animated animate__fadeInDown animate__delay-0s z-[1] lg:text-black  text-5xl  mb-4'>WELCOME</h1>
          </div>
          <h2 className='animate__animated animate__fadeInDown animate__delay-1s  text-black z-[1]  font-bold text-5xl  mb-4'>
            I'm {"  "}
            <span
              className='bg-amber-500 inline-block text-transparent bg-clip-text'
              style={{ fontWeight: "bold" }}
            >
              <Typewriter
                words={["YOUNESS BAIT", " a Full Stack Developer."]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <div className="animate__animated animate__fadeInDown animate__delay-2s">
            <p className='z-[1]  text-amber-500 w-[300px]    md:w-[500px]   lg:w-[800px] mb-4'>
              I’m a full-stack developer specializing in building (and
              occasionally designing) exceptional digital experiences. Currently,
              I’m focused on building responsive full-stack web applications.
            </p>
          </div>
          <div className='z-[1]'>
            <div >
              <button className='animate__animated animate__fadeInDown animate__delay-3s   mt-[20px] flex justify-between items-center  shadow-2xl p-[15px]  bg-amber-500  rounded-xl  '>
                View Work <GrNext className='z-[1] ml-2 text-xl' />
              </button>
            </div>
          </div>
        </div>
        <div className="  flex justify-center items-center mb-[20px] w-full">
          <FaArrowCircleDown className=" shadow-2xl text-amber-500 animate-bounce w-12 h-12" />
        </div>
      </div>
    </div>
  );
}
