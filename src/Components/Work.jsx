import React from "react";
import "../index.css";
import Docter from "../Images/medical.avif";
import ecommerc from "../Images/ecommerce.png";
import chat from '../Images/chat.png'
import AI from '../Images/AI.webp'
import api from '../Images/api.jpg'
import sys from '../Images/system.png'

export default function Work() {
  return (
    <div
      name='work'
      className=' work bg-white w-full h-screen text-black flex flex-col justify-center items-center '
    >
      <div >
        <h1 className=' my-[20px] text-3xl font-bold border-b-[6px] border-b-amber-500 '>
          Work
        </h1>
      </div>
      <div >
        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4 '>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            style={{ backgroundImage: `url(${sys})` }}
            className=' shadow-2xl lg:w-[350px] lg:h-[200px]  md:w-[220px] md:h-[160px]  rounded-md work md:ml-[30px] w-[170px]  h-[120px] duration-300 grid grid-cols-1 gap-3 md:gap-[40px] md:grid-cols-3  '
          >
            {/*
        // todo: animation the project
         */}
            <div className=' md:w-[389%] hidden lg:flex flex-col justify-center items-center duration-300 rounded-md effect opacity-0 hover:opacity-100 '>
              <span className='font-bold mb-[50px] text-2xl'>
                System Management {" "}
              </span>
              <div className=' '>
                <a href='https://github.com/younessbait/MERN-STACK-EMPLOYEE-MANAGMENT-SYSTEM' target="_blank">
                  <button className=' p-[15px] bg-white w-[100px] rounded-md font-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            style={{ backgroundImage: `url(${chat})` }}
            className=' shadow-2xl lg:w-[350px] lg:h-[200px]  md:w-[220px] md:h-[160px]  rounded-md work md:ml-[30px] w-[170px]  h-[120px] duration-300 grid grid-cols-1 gap-3 md:gap-[40px] md:grid-cols-3  '
          >
            {/*
        // todo: animation the project
         */}
            <div className=' md:w-[389%] hidden lg:flex flex-col justify-center items-center duration-300 rounded-md effect opacity-0 hover:opacity-100 '>
              <span className='font-bold mb-[50px] text-2xl'>
                Chat Application{" "}
              </span>
              <div className=' '>
                <a href='https://github.com/younessbait/MERN_ChatApp_Like_Whatsapp' target='_blank'>
                  <button className=' p-[15px] bg-white w-[100px] rounded-md font-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${api})` }}
            className=' shadow-2xl lg:w-[350px] lg:h-[200px]  md:w-[220px] md:h-[160px]  rounded-md work md:ml-[30px] w-[170px]  h-[120px] duration-300 grid grid-cols-1 gap-3 md:gap-[40px] md:grid-cols-3  '
          >
            {/*
        // todo: animation the project
         */}
            <div className=' md:w-[389%] hidden lg:flex flex-col justify-center items-center duration-300 rounded-md effect opacity-0 hover:opacity-100 '>
              <span className='font-bold mb-[50px] text-2xl'>
                API Movies{" "}
              </span>
              <div >
                <a href='https://github.com/younessbait/API_MOVIES' target="_blank">
                  <button className=' p-[15px] bg-white w-[100px] rounded-md font-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ backgroundImage: `url(${AI})` }}
            className=' shadow-2xl lg:w-[350px] lg:h-[200px]  md:w-[220px] md:h-[160px]  rounded-md work md:ml-[30px] w-[170px]  h-[120px] duration-300 grid grid-cols-1 gap-3 md:gap-[40px] md:grid-cols-3  '
          >
            {/*
        // todo: animation the project
         */}
            <div className=' md:w-[389%] hidden lg:flex flex-col justify-center items-center duration-300 rounded-md effect opacity-0 hover:opacity-100 '>
              <span className='font-bold mb-[50px] text-2xl'>
                AI for Learn English{" "}
              </span>
              <div className=' '>

                <a href='/'>
                  <button className=' p-[15px] bg-white w-[100px] rounded-md font-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
            style={{ backgroundImage: `url(${Docter})` }}
            className='  shadow-2xl lg:w-[350px] lg:h-[200px]  md:w-[220px] md:h-[160px]  rounded-md work md:ml-[30px] w-[170px]  h-[120px] duration-300  grid grid-cols-1 gap-3 md:gap-[40px] md:grid-cols-3  '
          >
            {/*
        // todo: animation the project
         */}
            <div className=' md:w-[389%] hidden lg:flex flex-col justify-center items-center duration-300 rounded-md effect opacity-0 hover:opacity-100 '>
              <span className='font-bold mb-[50px] text-2xl'>
                Medical Website{" "}
              </span>
              <div>
                <a href='/'>
                  <button className=' p-[15px] bg-white w-[100px] rounded-md font-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            style={{ backgroundImage: `url(${ecommerc})` }}
            className=' rounded-md work md:ml-[30px] shadow-2xl lg:w-[350px] lg:h-[200px]  md:w-[220px] md:h-[160px]  w-[170px]  h-[120px] duration-300 grid grid-cols-1 gap-3 md:gap-[40px] md:grid-cols-3  '
          >
            {/*
        // todo: animation the project
         */}
            <div className=' md:w-[389%] hidden lg:flex flex-col justify-center items-center duration-300 rounded-md effect opacity-0 hover:opacity-100 '>
              <span className='font-bold mb-[50px] text-2xl'>
                E-commerce Website{" "}
              </span>
              <div>
                <a href='/'>
                  <button className=' p-[15px] bg-white w-[100px] rounded-md font-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
