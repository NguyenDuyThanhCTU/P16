"use client";
import { HeaderItems, TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { Drawer } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const [searchRs, setSearchRs] = React.useState([]);
  const { ContactData, Products, TradeMarkData, productTypes } = useData();
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTypeMB, setOpenTypeMB] = useState(0);

  useEffect(() => {
    const sort = Products?.filter((product: any) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRs(sort);
  }, [Products, search]);

  return (
    <div className="bg-maingreen text-mainyellow">
      <div className="w-[1200px] mx-auto  h-[85px] d:flex justify-between items-center p:hidden">
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
                placeholder="Tìm kiếm sản phẩm..."
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
            <Link
              href={`/san-pham?search=${search}`}
              className="bg-mainyellow border-mainyellow py-3 px-6 text-maingreen rounded-r-full cursor-pointer"
            >
              <FaSearch />
            </Link>
          </div>
          {search && (
            <div className="absolute w-full bg-maingreen top-full flex flex-col shadow-inner z-50 mt-2">
              <div className=" flex flex-col">
                {searchRs.map((product: any, idx: number) => (
                  <Link
                    href={`/chi-tiet-san-pham/${product.url}`}
                    key={idx}
                    className="cursor-pointer p-2 hover:bg-green-800"
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <Link href={`/bai-viet/tuyen-dung`} className="font-normal">
          <div className="border border-mainyellow py-2 px-5 uppercase rounded-lg hover:border-yellow-600 hover:text-yellow-600 duration-300">
            Tuyển dụng
          </div>
        </Link>
      </div>
      <div className="d:hidden p:block bg-maingreen ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-maingreen shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <div className="h-[84px]">
              <img
                src={TradeMarkData.websiteLogo}
                alt="Logo"
                className="w-full h-full p-2"
              />
            </div>
            <div className="flex gap-2">
              <div
                className="text-[22px] p-2"
                onClick={() => setOpenSearchMB(!openSearchMB)}
              >
                <FaSearch />
              </div>
              <div className="text-[22px] p-2" onClick={() => setOpen(true)}>
                <IoIosMenu />
              </div>
            </div>
          </div>
          {openSearchMB && (
            <div className=" relative bg-maingreen py-3">
              <div className="border rounded-full bg-white border-orange-500 flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6"
                    placeholder="Tìm kiếm"
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
                <div className="bg-orange-500 py-3 px-6 text-white rounded-r-full cursor-pointer">
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <Link
                        href={`$chi-tiet-san-pham/${product.url}`}
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
          )}
        </div>
        <>
          <Drawer
            placement="left"
            closable={false}
            width={300}
            onClose={() => setOpen(false)}
            open={open}
          >
            <div>
              <div className="p-5">
                <img src={TradeMarkData.websiteLogo} alt="logo" />
              </div>
              <div className="flex flex-col w-full border-b border-mainyellow pb-2">
                {TypeProductItems.map((item: any, idx: number) => {
                  const sort = productTypes?.filter(
                    (type: any) => type.parent === item.label
                  );
                  return (
                    <div key={idx}>
                      <div
                        className="w-full justify-between py-2 border-t items-center
                     flex"
                      >
                        <Link
                          href={`/san-pham/${item.value}`}
                          className={`${
                            openTypeMB === idx + 1 && "text-orange-500"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {sort?.length > 0 && (
                          <div
                            className={`${
                              openTypeMB === idx + 1 && "text-orange-500"
                            }`}
                            onClick={() => setOpenTypeMB(idx + 1)}
                          >
                            <IoChevronDownOutline />{" "}
                          </div>
                        )}
                      </div>
                      {sort.length > 0 && openTypeMB === idx + 1 && (
                        <div className="ml-2 flex flex-col">
                          {sort?.map((items: any, idx: number) => (
                            <Link
                              href={`/san-pham/${item.value}?type=${items.typeUrl}`}
                              key={idx}
                              className="hover:text-orange-500 py-1"
                            >
                              {items.type}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="flex flex-col mt-2 ">
                  {HeaderItems.map((item: any, idx: number) => (
                    <Link
                      href={`/${item.value}`}
                      className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      key={idx}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default Header;
