"use client";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src="/slider.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slider.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slider.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-[500px] object-cover"
        />
      </SwiperSlide>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Slider;
