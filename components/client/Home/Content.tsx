"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../Product/ProductCard";

const Content = ({ Data }: any) => {
  const { TradeMarkData, Slides } = useData();
  console.log(Slides);
  const serviceItems = [
    {
      topic: "Ship hàng tận nhà",
      content: "Bảo hành hàng tận bàn ăn",
      image:
        "https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/policy_2_image.png?1698827078537",
    },
    {
      topic: "Thanh toán đa dạng",
      content: "Tiền mặt, Card, Vat, ...",
      image:
        "https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/policy_3_image.png?1698827078537",
    },
    {
      topic: "Tư vấn nhiệt tình",
      content: `Hotline: ${TradeMarkData.phone}`,
      image:
        "https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/policy_4_image.png?1698827078537",
    },
  ];
  return (
    <div className="flex flex-col">
      <div>
        <img
          src="https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/bannertop.png?1698827078537"
          alt="banner"
        />
      </div>
      <div className="grid grid-cols-3 px-3 py-5">
        {serviceItems.map((item: any, idx: number) => (
          <div className="flex items-center gap-5 justify-center" key={idx}>
            <div>
              <img src={item.image} alt="slogan" />
            </div>
            <div>
              <h2 className="font-normal">{item.topic}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
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
          <div className="">
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
      <div className="w-full mt-5">
        <div className="flex items-center justify-between border-b border-black cursor-pointer">
          <h2 className="border-b-2 py-2 uppercase border-maingreen font-semibold text-[18px] text-maingreen hover:border-mainyellow hover:text-mainyellow duration-300 ">
            Thực phẩm sạch hot
          </h2>
          <div className="flex items-center ">
            <div className=" p-2 hover:bg-maingreen hover:text-white duration-300">
              <FaAngleLeft />
            </div>
            <div className=" p-2 hover:bg-maingreen hover:text-white duration-300">
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {Data.map((item: any, idx: number) => (
          <div
            key={idx}
            className="border cursor-pointer hover:shadow-xl duration-300"
          >
            <div className="p-2">
              <ProductCard Data={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
