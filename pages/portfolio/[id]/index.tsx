import React from 'react'
import { useRouter } from 'next/router'
import portfolios from '../../../lib/data.json'
import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'

const ProjectDetails = () => {
  const router = useRouter()
  const { id } = router.query

  const project = portfolios.find((portfolio: any) => portfolio.id === parseInt(id as string))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
    <Navbar />
    <div className="flex items-center h-screen">
      <div className="max-w-4xl flex space-x-10">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={project.imageView}
            alt={project.title}
            className="w-full h-72 rounded-lg"
          />
        </div>

        {/* Project details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold italic font-serif">{project.title}</h1>
          {/* <p className="text-gray-600 mt-4">{project.images.description}</p> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectDetails
