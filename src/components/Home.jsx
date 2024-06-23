import React from "react";
import bg from '../assets/bg.jpg';

const Home = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${bg})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col justify-center items-center w-full mx-auto px-4 md:mx-auto md:px-[100px] lg:px-[150px] lg:flex lg:flex-col lg:justify-center lg:h-full lg:items-center">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-white font-primaryFont mb-[50px] font-bold text-[40px] md:text-[60px]">
            Pascal Niri
          </h1>
          <p className="font-primaryFont text-white text-[16px]">
            I'm a passionate and creative UI/UX designer and front-end developer
            with <span className="text-[#01FFFF]">3 years of experience</span>. I specialize in designing user-centric
            interfaces and developing responsive, interactive websites and
            applications. My goal is to bridge the gap between design and
            technology to create seamless and engaging user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;