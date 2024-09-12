import React from 'react';

const About = () => {
  return (
    <section id='about' className="flex flex-col items-center justify-center pb-16 sm:pb-20 md:pb-24 px-4 sm:px-8 lg:px-16">
      {/* Vertical Line */}
      <div className="relative flex flex-col items-center mb-8">
        <div className="w-px h-12 md:h-16 bg-gray-300"></div>
        <h3 className="text-[#8a8989] text-lg md:text-xl italic font-light font-serif tracking-wide mt-2">
          01 <span className="ml-2">about</span>
        </h3>
      </div>

      {/* Description */}
      <p className="max-w-lg text-center text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose">
        Hi, I'm an architect with 3 years of creative experience. I love blending form and function to create spaces that inspire and elevate everyday life. My experience spans residential, commercial, and urban planning projects, where I strive to bring each client's vision to life while ensuring harmony between the built environment and its surroundings.
      </p>
    </section>
  );
};

export default About;
