import React from 'react'
import { useRouter } from 'next/router'
import portfolios from '../../lib/data.json'

const Portfolio = () => {
  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/portfolio/${id}`)
  }

  return (
    <section id='portfolio' className="flex flex-col items-center justify-center pb-24 px-20">
      {/* Vertical Line */}
      <div className="relative flex flex-col items-center mb-24">
        <div className="w-px h-16 bg-gray-300"></div>
        <h3 className="text-[#8a8989] text-lg italic font-light font-serif tracking-wide mt-2">
          02 <span className="ml-2">portfolio</span>
        </h3>
      </div>

      <div className='grid grid-cols-2 gap-20'>
        {portfolios.map((portfolio: any) => {
          return (
            <div key={portfolio.id} className="mb-8 relative group cursor-pointer" onClick={() => handleClick(portfolio.id)}>
              {/* Image */}
              <img
                src={portfolio.imageView}
                alt={portfolio.title}
                className="w-full h-72 object-cover rounded-lg cursor-pointer"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <h3 className="text-white text-lg font-medium italic tracking-wide font-serif">
                  {portfolio.title}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
