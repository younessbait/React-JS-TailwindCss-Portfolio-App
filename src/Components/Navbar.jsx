import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from '../Images/logo.png'
import 'animate.css';

export default function Navbar() {

  const [nav, setnav] = useState(true);
  const handleNav = () => setnav(!nav);
  const [scrolnav, setscrolnav] = useState(false);
  const chamgeback = () => {
    window.scrollY !== 0 ? setscrolnav(true) : setscrolnav(false);
  };
  window.addEventListener("scroll", chamgeback);
  return (
    <div
      name='navbar'
      className={
        scrolnav == true
          ? "z-10 text-white fixed w-full bg-[#262626] justify-between items-center flex h-[60px] px-4"
          : "  z-10  text-white sm:bg-[#262626]  lg:bg-transparent  fixed w-full  justify-between items-center flex h-[60px] px-4"
      }
    >
    {/* // ? LOGO */}
      <div className='animate__animated animate__backInLeft animate__delay-0s z-20 w-[150px]  '>
        <img
          src={`${logo}`}
        />
      </div>
      {/* 
     // ? MENU 
     */}
      <ul className=' animate__animated animate__fadeInDownBig animate__delay-0s hidden md:flex text-2xl   '>
        <li className='  hover:text-amber-500 '>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=' hover:text-amber-500 '>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=' hover:text-amber-500 '>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=' hover:text-amber-500'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className=' hover:text-amber-500'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* 
      // ? GiHamburgerMenu
       */}
      <div
        onClick={handleNav}
        className={
          scrolnav == true
            ? " md:hidden text-4xl z-10 cursor-pointer text-amber-500"
            : " md:hidden text-4xl z-10 cursor-pointer  text-amber-500"
        }
      >
        {!nav ? <IoClose /> : <GiHamburgerMenu />}
      </div>
      {/* 
       // ? MOBIELMENU
        */}
      <ul
        className={
          !nav
            ? " md:hidden absolute left-0 top-0 w-full h-screen flex flex-col  bg-black justify-center items-center  z-1  text-amber-500 "
            : " hidden"
        }
      >
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* 
      // ? social icons 
      */}
      <div className='fixed hidden lg:flex flex-col left-0 top-[35%]  '>
        <ul>
          <li className='flex justify-between items-center w-[200px] h-[60px] ml-[-129px] hover:ml-[-16px] duration-300'>
            <a
              target='_blank'
              className='animate__animated animate__backInLeft animate__delay-0s rounded-tr-3xl  text-blue-50  h-[100%] bg-blue-500 text-3xl  flex justify-between items-center w-full '
              href='https://www.linkedin.com/in/mern-bayt/'
            >
              <p className='ml-1'>Linkden</p>
              <AiOutlineLinkedin className='text-6xl mr-1' />
            </a>
          </li>
          <li className=' flex justify-between items-center w-[200px] h-[60px] ml-[-129px] hover:ml-[-16px] duration-300'>
            <a
              target='_blank'
              className=' animate__animated animate__backInLeft animate__delay-1s  text-blue-50 h-[100%]  bg-black text-3xl  flex justify-between items-center w-full '
              href='https://github.com/younessbait'
            >
              <p className='ml-1'>Github </p>{" "}
              <FaGithubSquare className='text-5xl mr-1' />
            </a>
          </li>
          <li className=' flex justify-between items-center w-[200px] h-[60px] ml-[-129px] hover:ml-[-16px] duration-300'>
            <a
              target='_blank'
              className='  text-blue-50 animate__animated animate__backInLeft animate__delay-2s  h-[100%]  bg-red-600	 text-3xl  flex justify-between items-center w-full '
              href='https://mail.google.com/mail/u/0/#inbox'
            >
              <p className='ml-1'>Email </p>{" "}
              <MdEmail className='text-5xl mr-1' />
            </a>
          </li>
          <li className=' flex justify-between items-center w-[300px] h-[60px] ml-[-229px] hover:ml-[-69px] duration-300'>
            <a
              target='_blank'
              className='animate__animated animate__backInLeft animate__delay-3s   text-blue-50 rounded-br-3xl h-[100%]  bg-blue-800	 text-3xl  flex justify-between items-center w-full '
              href='https://www.facebook.com/profile.php?id=100070135002753'
            >
              <p className='ml-[55px]'>Facebook </p>{" "}
              <FaFacebook className='text-5xl mr-1' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
