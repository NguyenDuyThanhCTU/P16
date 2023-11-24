import Category from "@components/client/Home/Category";
import Content from "@components/client/Home/Content";
import { getAllDataProps } from "@lib/get-data";
import React from "react";

const page = async () => {
  const Data = await getAllDataProps("products");

  return (
    <>
      <div className="col-span-3">
        <Content Data={Data} />
      </div>
    </>
  );
};

export default page;
