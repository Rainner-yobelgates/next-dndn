'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
    {
        breakpoint: 1140,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
        }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
    ]
};

const Product = () => {
  return (
     <div className="slider-container">
      <Slider {...settings}>
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
     </Slider>
     </div>
  )
}

export default Product