import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const btn = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path:"/about"
    },
    {
      id: 3,
      name: "Projets",
    },
    {
      id: 4,
      name: "Contact",
    },
    {
      id: 5,
      name: "Hire me",
    },
  ];
  return (
    <div id="home">
    <div className="flex flex-col justify-center align-center w-full  mx-auto px-4 md:mx-auto md:px-[100px]">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-white font-primaryFont mb-[50px] font-bold text-[40px] md:text-[60px] ">
          Pascal Niri
        </h1>
        <p className="font-secondaryFont text-white text-[16px]">
          I'm a passionate and creative UI/UX designer and front-end developer
          with <span className="text-[#01FFFF]">3 years of experience</span>. I specialize in designing user-centric
          interfaces and developing responsive, interactive websites and
          applications. My goal is to bridge the gap between design and
          technology to create seamless and engaging user experiences.
        </p>
      </div>
      <div className="text-[#01FFFF] flex flex-col justify-center w-full items-center  gap-10 mt-[100px] md:grid md:grid-cols-2 lg:flex lg:flex-row">
        {btn.map((item) => (
          <div key={item.id} className="w-full">
            <Link to={item.path} className="">
            <button className="border border-[#01FFFF] py-2 w-full rounded-[50px] font-secondaryFont text-[16px] transition-transform duration-[.3s] transform hover:scale-90 hover:bg-[#01FFFF] hover:text-black lg:gap-1">
              {item.name}
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
