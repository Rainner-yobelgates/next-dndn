import React from 'react'

const Carousel = () => {
  return (
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img
            src="https://www.mumubrandedbag.id/cdn/shop/files/115_ef895da2-07fa-46da-a55a-4fa498bdb97d.png?v=1720523029"
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img
            src="https://www.mumubrandedbag.id/cdn/shop/files/117_d75dc5db-f8a6-48ed-be8b-b66c700bb3a7.png?v=1720523028"
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img
            src="https://www.mumubrandedbag.id/cdn/shop/files/113_ac412b51-ed04-49a5-be8a-16bdbef0c9d2.png?v=1720523028"
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
  )
}

export default Carousel