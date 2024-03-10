"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative pt-[6.3rem]">
      <div className="absolute bottom-0 w-full   z-20 h-40 bg-gradient-to-t from-gray-100 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <Image
            loading="lazy"
            src={"/1.jpg"}
            alt="image-1"
            width={2000}
            height={2000}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src={"/2.jpg"}
            alt="image-2"
            width={2000}
            height={2000}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src={"/3.jpg"}
            alt="image-3"
            width={2000}
            height={2000}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
