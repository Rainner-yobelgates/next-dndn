import Image from 'next/image'
import React from 'react'

const Hero = ({api, loading}) => {
    if (loading) {
        return (
            <div className="carousel w-full">
                <div className="skeleton h-[500px] w-full"></div>
            </div>
        )
    }
  return (
    <div className="carousel w-full">
        {api.payload?.map((banner, index) => {
            return (
                <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index}>
                    <Image
                            src={`https://api.al-miffa.or.id/storage/${banner.path}`} // Dynamic path to your image
                            width={500} // Set a default width
                            height={500} // Set a default height
                            className="object-cover w-full" // Ensure the image covers the container
                            alt={"Image"} // Add alt attribute
                        />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href={`#slide${index === 0 ? api.payload.length : index}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${index === api.payload.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Hero