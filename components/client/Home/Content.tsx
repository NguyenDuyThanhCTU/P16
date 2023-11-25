"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../Product/ProductCard";
import DisplayProduct from "../Product/DisplayProduct";

const Content = ({ Data }: any) => {
  const { TradeMarkData, Slides, Videos } = useData();

  const feshFood = Data.filter(
    (item: any) =>
      item.parent2 === "Thực Phẩm Sạch Hot" || item.parent2 === undefined
  );
  const seafood = Data.filter((item: any) => item.parent2 === "Hải Sản Hot");
  const fruit = Data.filter((item: any) => item.parent2 === "Hoa Quả Hot");
  const meat = Data.filter((item: any) => item.parent2 === "Thịt Đặc sản");

  return (
    <div className="flex flex-col">
      <div className="w-full ">
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[]}
          className="mySwiper"
        >
          <div className="w-full flex justify-center">
            {Slides.map((item: any, idx: number) => (
              <SwiperSlide key={idx}>
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt="banner"
                    className="object-contain "
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <DisplayProduct Data={feshFood} topic="Thực phẩm sạch hot" />
      <div className="grid p:grid-cols-2 d:grid-cols-3 gap-10 mt-5">
        {Videos.map((video: any, idx: number) => (
          <div key={idx} className="h-[200px] flex items-center bg-black">
            <iframe
              width="100%"
              height="auto"
              className="outline-none"
              src={video.embedurl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        ))}
      </div>
      <DisplayProduct Data={seafood} topic="Hải Sản Hot" />
      <DisplayProduct Data={fruit} topic="Hoa Quả Hot" />
      <DisplayProduct Data={meat} topic="Thịt Đặc Sản" />
    </div>
  );
};

export default Content;
