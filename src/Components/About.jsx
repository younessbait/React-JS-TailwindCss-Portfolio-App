import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgabout from '../Images/Upscales.ai_1717585192033 (1).png'
export default function About() {
  AOS.init();
  return (
    <div
      name='about'
      className='   w-full h-screen bg-amber-500 flex justify-around items-center '
    >
      <div className=' md:flex justify-center items-center my-9 hidden ml-[10%]  w-[65%] h-[65%]'>
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className='shadow-2xl rounded-full lg:h-[100%]'
          src={imgabout}
        />
      </div>
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" data-aos-duration="2000"  className='  flex flex-col w-[70%] mr-[10%]  items-start'>
        <h1 className=' text-center text-3xl font-bold border-b-[6px] my-10 md:mx-[40px]  border-b-white '>
          About
        </h1>
        <h2 className=' md:mx-[40px] font-bold text-3xl  '>
          Hi. I'm Youness Bait, nice to meet you. Please take a look around.
        </h2>
        <p className=' md:m-[40px] '>
          I am passionate about building excellent software that improves
          the lives of those around me. I specialize in creating software
          for clients ranging from individuals and small-businesses all the
          way to large enterprise corporations. What would you do if you had
          a software expert available at your fingertips?
        </p>
      </div>
    </div>
  );
}
