"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const Footer = () => {
  const { ContactData } = useData();
  return (
    <div className="bg-maingreen text-mainyellow py-10">
      <div className="p:w-auto p:mx-2 d:w-[1200px] d:mx-auto grid p:grid-cols-1 d:grid-cols-4 gap-10">
        <div>
          <h2 className="uppercase font-normal ">GIỚI THIỆU VỀ CLEVERFOOD</h2>
          <div className="mt-4 text-white font-light">
            CleverFood với sứ mệnh là binh đoàn tiên phong trong cuộc chiến đẩy
            lùi thực phẩm bẩn, làm cho dân ta khỏe, giúp cho dân ta sướng và
            được tận hưởng của ngon vật lạ theo phong cách lính.
          </div>
          <div className="mt-4">
            <img
              src="https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/logo_bct.png?1698827078537"
              alt="policy"
            />
          </div>
        </div>
        <div>
          <h2 className="uppercase font-normal ">ĐỊA CHỈ CỬA HÀNG</h2>
          <div className="mt-4 text-white font-light">
            {ContactData.address}
          </div>
        </div>
        <div>
          <h2 className="uppercase font-normal ">CLICK ĐỂ VÀO GOOGLE MAPS</h2>
          <div className="mt-4 text-white font-light py-2">
            <iframe
              src={ContactData.location}
              scrolling="no"
              className="outline-none"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className="uppercase font-normal ">Fanpage LachMarket</h2>
          <div className="mt-4 text-white font-light">
            {" "}
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flachmarket&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              className="outline-none"
              height="300"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
