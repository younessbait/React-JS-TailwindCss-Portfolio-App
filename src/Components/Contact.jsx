import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
import us from '../Images/us-contact.png'
export default function Contact() {
  const notify = () => {
    if (user_email !== "" && user_email !== "" && message !== "") {
      toast.success("message is sending", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("message  not sending", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const form = useRef();
  const [user_name, setname] = useState("");
  const [user_email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setemail("");
    setname("");
    setmessage("");
    emailjs
      .sendForm(
        "service_z44n67i",
        "template_erq4dtm",
        form.current,
        "RQ4643Y8jr0NyOBLt",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("msg send");
        },
        (error) => {
          console.log(error.text);
          console.log("msg not send");
        },
      );
  };

  return (
    <div
      name='contact'
      className='contact w-full justify-center h-screen text-white '
    >
      <div className=" flex justify-center items-center">
        <div  className="w-[100%] lg:w-[50%]  h-screen">
          <div className=" mt-[6%] flex justify-center items-center  " >
            <h1 className='  lg:w-[18%] my-[45px] text-3xl font-bold border-b-[6px] border-b-amber-500 '>
              Contact
            </h1>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='ml-[10%] lg:ml-[15%] flex flex-col h-[68%]   justify-center  w-[80%]'
          >
            <label className=' font-bold text-xl'>Name :</label>
            <input
              required
              className=' outline-none p-2 text-black md:p-3 rounded-md my-4'
              type='text'
              name='user_name'
              value={user_name}
              onChange={(e) => setname(e.target.value)}
            />
            <label className=' font-bold text-xl'>Email :</label>
            <input
              required
              className='outline-none p-2 text-black md:p-3 rounded-md  my-4'
              type='email'
              name='user_email'
              value={user_email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label className=' font-bold text-xl'>Message :</label>
            <textarea
              required
              className='outline-none p-6 md:p-3 text-black rounded-md  md:h-[150px]  my-4'
              name='message'
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
            <input
              onClick={notify}
              className=' bg-amber-500 rounded-md p-3 cursor-pointer font-bold'
              type='submit'
              value='Send'
            />
          </form>
        </div>
        <div className="  lg:flex justify-center items-center hidden w-[50%] h-screen">
          <img className="mb-[-10%]" src={`${us}`}/>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
