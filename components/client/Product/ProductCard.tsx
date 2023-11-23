import Link from "next/link";
import React from "react";

const ProductCard = ({ Data }: any) => {
  return (
    <Link href={`/chi-tiet-san-pham/${Data.url}`} className="group">
      <div className="w-full h-[150px] flex justify-center overflow-hidden">
        <img
          src={Data.image}
          alt="product"
          className="object-contain hover:scale-110 duration-300"
        />
      </div>
      <div className="text-center mt-4 font-normal">
        <div>{Data.title}</div>
        <div className="mt-5 text-maingreen group-hover:text-green-600 duration-300">
          Liên hệ
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
