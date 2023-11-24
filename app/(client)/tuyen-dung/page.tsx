import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

const RecruitmentPage = async () => {
  const Data = await getAllDataProps("posts");
  console.log(Data);
  return (
    <div className="mt-9">
      <h2 className="font-normal py-3 text-[24px] uppercase border-b w-full ">
        Tuyển dụng
      </h2>
      <div className=" pt-5 pb-10 p:w-auto p:mx-2">
        <div className="grid p:grid-cols-2 d:grid-cols-3 gap-5  ">
          {Data.filter((data: any) => data.url === "tuyen-dung").map(
            (item: any, idx: number) => {
              const content = item?.content;
              const maxLength = 150;

              const truncatedContent = content
                ? content.substring(0, maxLength)
                : "";

              const markup = { __html: truncatedContent };
              const DetailPostDate = moment
                .unix(item.createdAt.seconds)
                .format("MMMM DD, YYYY");
              return (
                <Link
                  href={`/bai-viet/${item.topicurl}`}
                  key={idx}
                  className="cursor-pointer hover:shadow-2xl duration-300 mt-2 border"
                >
                  <div className="h-[235px] flex justify-center">
                    <img
                      src={item.image}
                      alt="blog"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <h2 className="font-normal mt-2 truncate2">{item.topic}</h2>
                    <div className="flex py-1 gap-5 ">
                      <div className="flex items-center gap-1 text-gray-400 ]">
                        <AiOutlineUser />
                        <p className="">lachmarket.com</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 pr-5 ]">
                        <AiOutlineClockCircle />
                        <p className="">{DetailPostDate}</p>
                      </div>
                      {/* <div className="h-full w-1"></div> */}
                    </div>
                    <div
                      dangerouslySetInnerHTML={markup}
                      className="truncate2 mt-2 font-extralight"
                    ></div>
                    <div className="text-redPrimmary  font-normal hover:scale-105 duration-300  cursor-pointer">
                      [Đọc tiếp...]
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPage;
