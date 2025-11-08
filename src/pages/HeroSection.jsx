import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-800 flex flex-col lg:flex-row">

      {/* Left Section: Image */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src="../../src/assets/assets/front-view-business-people-meeting.jpg"
          alt="Team working"
        />
      </div>

      {/* Right Section: Text */}
      <div className="w-full lg:w-1/2 bg-black text-white flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-20">
        <p className="text-sm sm:text-base md:text-lg mb-4 opacity-70">
          We create premium designs and technology.
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
          A digital studio crafting beautiful experiences.
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-10 opacity-70 leading-relaxed">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since. Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button className="self-start px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-semibold uppercase tracking-wider text-sm sm:text-base rounded-md hover:bg-gray-200 transition duration-300">
          START YOUR BUSINESS
        </button>
      </div>

    </section>
  );
};

export default HeroSection;
 