import React from 'react';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center relative pt-24 sm:pt-32 md:pt-40 px-4 sm:px-8 md:px-20"
      style={{ backgroundImage: "url('/images/hotelHero.jpg')", minHeight: '100vh' }}
    >
      <div className="container mx-auto text-center p-6 rounded z-50">
        {/* Hero Title */}
        <h1 className='tracking-[0.2em] sm:tracking-[0.4em] text-white font-medium text-3xl sm:text-4xl md:text-6xl uppercase'>
          Benita Onyebuchi
        </h1>

        {/* Hero Subtitle */}
        <p className='text-white uppercase tracking-[0.2em] sm:tracking-[0.4em] text-sm sm:text-base md:text-xl mt-2'>
          Architect
        </p>
      </div>
    </section>
  );
};

export default Hero;
