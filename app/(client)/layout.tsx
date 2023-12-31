"use client";
import Category from "@components/client/Home/Category";
import Copyright from "@components/layout/client-layout/Copyright";
import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import Hotline from "@components/layout/client-layout/Hotline";
import OnTop from "@components/layout/client-layout/OnTop";
import PathMap from "@components/layout/client-layout/PathMap";
import { getAllDataProps } from "@lib/get-data";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";

import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const params = useParams();

  return (
    <div className="font-LexendDeca font-extralight">
      <Header />

      <div className="z-0 d:mt-0 p:mt-[84px] relative py-5">
        <div className="grid grid-cols-4 gap-5  d:w-[1200px] p:mx-2 d:mx-auto p:w-auto">
          <div className="mt-10 d:col-span-1 p:col-span-4">
            <div className="w-full flex justify-center">
              <img
                src="https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/logo.png?1698827078537"
                alt="banner"
              />
            </div>
          </div>
          <div className="col-span-3 p:hidden d:block">
            {" "}
            <div>
              <img
                src="https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/bannertop.png?1698827078537"
                alt="banner"
              />
            </div>
          </div>
        </div>
        <div className="">
          {" "}
          <PathMap />{" "}
        </div>
        <div className="grid grid-cols-4 gap-5  p:w-auto d:w-[1200px] p:mx-2 d:mx-auto  ">
          {Object.keys(params).length > 0 ? (
            <>
              <div className="col-span-4 mt-5 ">{children}</div>
            </>
          ) : (
            <>
              <div className="mt-10 d:block p:hidden">
                <Category />
              </div>
              <div className="p:col-span-4 d:col-span-3 ">{children}</div>
            </>
          )}
        </div>
      </div>

      <Footer />
      <div className="relative z-50">
        <OnTop />
        <Hotline />
      </div>
      <Copyright />
    </div>
  );
};

export default layout;
