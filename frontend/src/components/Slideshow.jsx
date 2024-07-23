import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import images from './../../public/Slideshow/images.js';

const Slideshow = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="pb-6">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <div className="flex justify-center z-1">
                            <img
                                src={image}
                                alt={`slide-${index}`}
                                className="w-[700px]"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slideshow;
