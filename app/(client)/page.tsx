import Category from "@components/client/Home/Category";
import Content from "@components/client/Home/Content";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-[1200px] mx-auto grid grid-cols-4 gap-5">
        <div className="mt-10">
          <Category />
        </div>
        <div className="col-span-3">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default page;
