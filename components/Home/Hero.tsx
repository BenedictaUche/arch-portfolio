import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center relative pt-40 mx-20"
      style={{ backgroundImage: "url('/images/hotelHero.jpg')",
      height:"1080px" }}
    >
        <div className="container mx-auto text-center p-6 rounded z-50">
            <h1 className='tracking-[0.5em] text-white font-medium text-[50px] uppercase'>Benita Onyebuchi</h1>
            <p className='text-white uppercase tracking-[0.5em] text-xl'>Architect</p>
        </div>
        {/* <div className="pt-16">
            <Image
            src="/images/hotelHero.jpg"
            alt="Hero Image"
            layout="responsive"
            width={1920}
            height={1080}
            />
        </div> */}
    </section>
  )
}

export default Hero
