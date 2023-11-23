"use client";
import Copyright from "@components/layout/client-layout/Copyright";
import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import Hotline from "@components/layout/client-layout/Hotline";
import OnTop from "@components/layout/client-layout/OnTop";

import { usePathname } from "next/navigation";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="font-LexendDeca font-extralight">
      <Header />

      <div className="z-0 relative ">{children}</div>

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
