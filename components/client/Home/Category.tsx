"use client";
import { TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaCaretRight } from "react-icons/fa";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Category = ({ Data }: any) => {
  const [show, setShow] = React.useState<any>(0);
  const { productTypes, Posts } = useData();
  const HandleShow = (idx: number) => {
    if (show === idx) {
      setShow(0);
    } else {
      setShow(idx);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div>
          <img
            src="https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/logo.png?1698827078537"
            alt="banner"
          />
        </div>
        <div className="flex items-center gap-5">
          <div>
            <img
              src="https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/policy_1_image.png?1698827078537"
              alt="slogan"
            />
          </div>
          <div>
            <h2 className="font-normal">Sơ chế tận tay</h2>
            <p>Nhận ngay về nấu</p>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-maingreen flex gap-3 justify-start items-center text-white w">
            <div className="h-14 w-1 bg-black"></div>
            <div className="text-[20px]">
              <IoIosMenu />
            </div>
            <div className="uppercase font-normal">Danh mục sản phẩm</div>
          </div>
          <div className="w-full flex  flex-col">
            {TypeProductItems.map((item: any, idx: number) => {
              const sort = productTypes.filter(
                (type: any) => type.parent === item.label
              );
              return (
                <div key={idx}>
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 bg-gray-100 border-b text-maingreen cursor-pointer hover:bg-gray-200"
                  >
                    <div className="flex items-center ml-3 gap-2">
                      <FaCaretRight />
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    {sort.length > 0 && (
                      <div className="mr-2" onClick={() => HandleShow(idx + 1)}>
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                  {sort.length > 0 && (
                    <div
                      className={`${show === idx + 1 ? "block" : "hidden"} `}
                    >
                      {sort.map((item: any, idx: number) => (
                        <div
                          className={`py-2 pl-8 cursor-pointer hover:bg-gray-100`}
                          key={idx}
                        >
                          {item.type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full ">
          <div className="flex items-center justify-between border-b border-black cursor-pointer">
            <h2 className="border-b-2 py-2  border-maingreen font-semibold text-[18px] text-maingreen hover:border-mainyellow hover:text-mainyellow duration-300 ">
              Sản phẩm bán chạy
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
        <div className="w-full bg-gray-50">
          <div className="p-2  flex flex-col gap-5">
            {Data.slice(0, 5).map((item: any, idx: number) => (
              <div
                key={idx}
                className="grid grid-cols-3 gap-5 cursor-pointer hover:shadow-lg "
              >
                <div className="p-2">
                  <img src={item.image} alt="product" />
                </div>
                <div className="col-span-2">
                  <div>{item.title}</div>
                  <div className="text-maingreen font-semibold">Liên hệ</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full pb-10">
          <div className="flex items-center justify-between border-b border-black cursor-pointer">
            <h2 className="border-b-2 py-2  border-maingreen font-semibold text-[18px] text-maingreen hover:border-mainyellow hover:text-mainyellow duration-300 ">
              HỖ TRỢ TRỰC TUYẾN
            </h2>
          </div>
        </div>
        <div className="w-full pb-10">
          <div className="flex items-center justify-between border-b border-black cursor-pointer">
            <h2 className="border-b-2 py-2  border-maingreen font-semibold text-[18px] text-maingreen hover:border-mainyellow hover:text-mainyellow duration-300 ">
              TIN TỨC- BLOG
            </h2>
          </div>
          <div className="border">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={1}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <div>
                {Posts.map((item: any, idx: number) => (
                  <SwiperSlide key={idx}>
                    <div>
                      <div>
                        <img src={item.image} alt="post" />
                      </div>
                      <div>{item.title}</div>
                      <div></div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
