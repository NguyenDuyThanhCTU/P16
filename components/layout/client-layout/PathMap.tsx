"use client";
import { TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const PathMap = () => {
  const { productTypes, Products, Posts } = useData();
  const pathname = usePathname();
  const search = useSearchParams();

  const searchType = search.get("type");

  const searchValue = search.get("search");
  const result = pathname.split("/")[1];
  const result1 = pathname.split("/")[2];

  const serviceItems = [
    {
      topic: "Sơ chế tận tay",
      content: "Nhận ngay về nấu",
      image:
        "https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/policy_1_image.png?1698827078537",
    },
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
      content: `Hotline: }`,
      image:
        "https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/policy_4_image.png?1698827078537",
    },
  ];

  return (
    <div>
      <div className="">
        {pathname === "/" ? (
          <div className="p:w-auto  d:w-[1200px] p:mx-2 d:mx-auto grid grid-cols-4 gap-5">
            {" "}
            <div className="p:hidden d:block">
              <div className="flex items-center gap-5 mt-2 py-5 ">
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
            </div>
            <div className="col-span-3 d:block p:hidden">
              <div className="grid grid-cols-3 px-3 py-5">
                {serviceItems
                  .slice(1, serviceItems.length)
                  .map((item: any, idx: number) => (
                    <div
                      className="flex items-center gap-5 justify-center"
                      key={idx}
                    >
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
            </div>
            <div className="d:hidden p:block col-span-4 mt-2">
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
                  {serviceItems.map((item: any, idx: number) => (
                    <SwiperSlide key={idx}>
                      <div
                        className="flex items-center gap-5 justify-center"
                        key={idx}
                      >
                        <div>
                          <img src={item.image} alt="slogan" />
                        </div>
                        <div>
                          <h2 className="font-normal">{item.topic}</h2>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        ) : (
          <div className="bg-gray-200 grid grid-cols-4 gap-5 ">
            <div className="col-span-4  bg-gray-200 py-3 p:w-auto d:w-[1200px] mx-auto">
              <div className="flex items-center gap-2 font-light  px-2">
                <Link
                  href={`/`}
                  className="hover:text-maingreen cursor-pointer w-max"
                >
                  Trang chủ
                </Link>

                <p className="text-[14px]">/</p>
                {result === "san-pham" ? (
                  <>
                    <Link href={`/san-pham`}>Sản phẩm</Link>
                    <div>
                      {result1 !== undefined && (
                        <>
                          {TypeProductItems.filter(
                            (item: any) => item.value === result1
                          ).map((item, idx) => (
                            <div className="flex items-center gap-2">
                              <Link
                                href={`/san-pham/${item.value}`}
                                className="hover:text-maingreen cursor-pointer flex items-center gap-2"
                                key={idx}
                              >
                                {/* <p className="text-[14px]">/</p> */}
                                <p> {item.label}</p>
                              </Link>
                              {productTypes
                                .filter(
                                  (item: any) => item.typeUrl === searchType
                                )
                                .map((item: any, idx: number) => (
                                  <Link
                                    href={`/san-pham/${item.parentUrl}?type=${item.typeUrl}`}
                                    className="hover:text-maingreen cursor-pointer flex items-center gap-2"
                                    key={idx}
                                  >
                                    <p className="text-[14px]">/</p>
                                    <p> {item.type}</p>
                                  </Link>
                                ))}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </>
                ) : result === "bai-viet" ? (
                  <>
                    <Link
                      className="hover:text-maingreen cursor-pointer w-max"
                      href={`/bai-viet`}
                    >
                      Bài viết
                    </Link>
                    {result1 !== undefined && (
                      <>
                        {Posts.filter(
                          (item: any) => item.topicurl === result1
                        ).map((item: any, idx: any) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                              <p className="text-[14px]">/</p>
                              <p className="truncate"> {item.topic}</p>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </>
                ) : result === "tuyen-dung" ? (
                  <>
                    <Link href={`/tuyen-dung`}>Tuyển dụng</Link>
                    {result1 !== undefined && (
                      <>
                        {Posts.filter(
                          (item: any) => item.topicurl === result1
                        ).map((item: any, idx: any) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                              <p className="text-[14px]">/</p>
                              <p className="truncate"> {item.topic}</p>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </>
                ) : result === "chi-tiet-san-pham" ? (
                  <>
                    <Link href={`/san-pham`}>Sản phẩm</Link>
                    {result1 !== undefined && (
                      <>
                        {Products.filter(
                          (item: any) => item.url === result1
                        ).map((item: any, idx: any) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                              <p className="text-[14px]">/</p>
                              <p className="truncate"> {item.title}</p>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </>
                ) : result === "chi-tiet-bai-viet" ? (
                  <>
                    <Link href={`/bai-viet`}>Bài viết</Link>
                    {result1 !== undefined && (
                      <>
                        {Posts.filter(
                          (item: any) => item.topicurl === result1
                        ).map((item: any, idx: any) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                              <p className="text-[14px]">/</p>
                              <p className="truncate"> {item.topic}</p>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </>
                ) : null}

                {/* {result === "san-pham" ? (
                  <Link
                    href={`/san-pham`}
                    className="hover:text-maingreen cursor-pointer"
                  >
                    Sản phẩm
                  </Link>
                ) : result === "bai-viet" ? (
                  <Link
                    href={`/bai-viet`}
                    className="hover:text-maingreen cursor-pointer"
                  >
                    <p className="text-[14px]">/</p>
                    <p> Bài viết</p>
                  </Link>
                ) : null}
                <p className="text-[14px]">/</p>
                {result === "san-pham" ? (
                  <>
                    {TypeProductItems.filter(
                      (item: any) => item.value === result1
                    ).map((item, idx) => (
                      <Link
                        href={`/san-pham/${item.value}`}
                        className="hover:text-maingreen cursor-pointer"
                        key={idx}
                      >
                        <p className="text-[14px]">/</p>
                        <p> {item.label}</p>
                      </Link>
                    ))}
                  </>
                ) : null} */}

                {/* {productTypes
                  .filter((item: any) => item.typeUrl === searchType)
                  .map((item: any, idx: number) => (
                    <Link
                      href={`/san-pham/${item.parentUrl}?type=${item.typeUrl}`}
                      className="hover:text-maingreen cursor-pointer"
                      key={idx}
                    >
                      <p className="text-[14px]">/</p>
                      <p> {item.type}</p>
                    </Link>
                  ))}

                {Products.filter((item: any) => item.url === searchValue).map(
                  (item: any, idx: number) => (
                    <div key={idx}>
                      {" "}
                      <p className="text-[14px]">/</p>
                      <p> {item.title}</p>
                    </div>
                  )
                )} */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PathMap;
