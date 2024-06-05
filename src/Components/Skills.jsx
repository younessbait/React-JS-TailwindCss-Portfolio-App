import React from "react";
export default function Skills() {
  return (
    <div
      name='skills'
      className='flex flex-col    w-full justify-center h-screen bg-[#262626]  items-center'
    >
      <h1 data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500" className='mb-[5%] text-3xl text-white font-bold border-b-[6px] border-b-amber-500 '>      Skills    </h1>
      <ul className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center justify-center [&>*]:rounded-md  [&>*]:bg-gray-700 [&>*]:w-full [&>*]:h-20 [&>*]:flex sm:[&>*]:px-14">
        <li data-aos="fade-up"
     data-aos-duration="100" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="200" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/css.png?raw=true"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="300" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="400" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://velog.velcdn.com/images/diso592/post/8c07ebac-2637-48b8-ae55-41915e2e30bf/image.png"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="500" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="600" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="700" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_logo_icon_146422.png"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="800" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="900" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="1000" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="1100" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://static-00.iconduck.com/assets.00/github-emoji-2048x2021-w2ge0ghn.png"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="1200" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="1300" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://cdn.worldvectorlogo.com/logos/postman.svg"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="1400" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://res.cloudinary.com/practicaldev/image/fetch/s--RpUfSAFP--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8otweo5ef6kwc26rmxe5.png"
            }
          />
        </li>
        <li data-aos="fade-up"
     data-aos-duration="1500" className="hover:bg-amber-500">
          <img
            className='w-10 m-auto flex-none hover:scale-125 duration-300'
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
            }
          />
        </li>
      </ul>
    </div>
  );
}
