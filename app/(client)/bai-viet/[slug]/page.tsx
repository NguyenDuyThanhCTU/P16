import PostsCategory from "@components/client/Posts/PostsCategory";
import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import moment from "moment";
import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

export const metadata: Metadata = {
  title: "LachMarket",
  description: "LachMarket",
};

const PostDetailPage = async ({ params }: { params: { slug: string } }) => {
  const Data = await getDataByTypeProps("posts", "topicurl", params.slug);
  const DataCategory = await getDataByTypeProps(
    "posts",
    "topic",
    Data[0]?.topic
  );

  const markup = { __html: Data[0]?.content };
  const DetailPostDate = moment
    .unix(Data[0]?.createdAt.seconds)
    .format("MMMM DD, YYYY");
  return (
    <>
      <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto ">
        <div className="pb-10  grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
          <div className="border h-max border-gray-400 col-span-2 d:block p:hidden">
            <div className="p-3 ">
              <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black"></h2>
              {DataCategory && <PostsCategory Data={DataCategory} />}
            </div>
          </div>
          <div className="p:col-auto d:col-span-5">
            <div className=" pb-5 border-b flex flex-col gap-4">
              <h3 className=" text-[34px] font-normal">{Data[0]?.title}</h3>
              <div className="flex gap-5 flex-col">
                <div className="uppercase p-1 text-blue-500 border border-blue-500 ">
                  {Data[0]?.topic}
                </div>
                <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
                  <AiOutlineClockCircle />
                  <p className="">{DetailPostDate}</p>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <AiOutlineUser />
                  <p className=""> asiachau.de</p>
                </div>
              </div>
            </div>
            {Data[0]?.content && (
              <div
                className="font-LexendDeca font-extralight mt-5"
                dangerouslySetInnerHTML={markup}
              ></div>
            )}
          </div>
          <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
            <div className="p-3 ">
              <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
                Bài viết mới nhất
              </h2>
              {DataCategory && <PostsCategory Data={DataCategory} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
