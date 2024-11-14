import React from "react";
import Slider from "react-slick";
import { FaShareAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ images, title, host, soldOut }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden p-4">
      <div className="relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>

        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer">
          <FaShareAlt className="text-gray-600" />
        </div>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Hosted by {host}</p>
        <p className={`text-sm font-semibold ${soldOut ? 'text-red-500' : 'text-green-500'}`}>
          {soldOut ? 'Soldout' : 'Available'}
        </p>
      </div>
    </div>
  );
};

export default Card;
