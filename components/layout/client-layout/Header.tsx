"use client";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const [searchRs, setSearchRs] = React.useState([]);
  const { ContactData } = useData();

  return (
    <div className="bg-maingreen text-mainyellow">
      <div className="w-[1200px] mx-auto h-[60px] flex justify-between items-center">
        <div className="flex items-center  gap-2">
          <div>
            <img
              src="https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/icon_open.png?1698827078537"
              alt="work time"
            />
          </div>
          <div className="font-normal  ">
            <div>Online: {ContactData.worktime}</div>
            <div>Cửa hàng: {ContactData.worktime}</div>
          </div>
        </div>
        <div className=" relative">
          <div className="border rounded-full border-mainyellow flex items-center ">
            <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
              <input
                type="text"
                className="outline-none mr-2 col-span-6 bg-maingreen"
                placeholder={search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div>
                <div
                  className={`${
                    search ? "block" : "hidden"
                  }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                  onClick={() => setSearch("")}
                >
                  <RxCross2 />
                </div>
              </div>
            </div>
            <div className="bg-mainyellow border-mainyellow py-3 px-6 text-maingreen rounded-r-full cursor-pointer">
              <FaSearch />
            </div>
          </div>
          {search && (
            <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
              <div className=" flex flex-col">
                {searchRs.map((product: any, idx: number) => (
                  <Link
                    href={`/chi-tiet-san-pham/${product.url}`}
                    key={idx}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <Link href={`/bai-viet/tuyen-dung`} className="font-normal">
          Tuyển dụng
        </Link>
      </div>
    </div>
  );
};

export default Header;
