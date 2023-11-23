import React from "react";

const Footer = () => {
  return (
    <div className="bg-maingreen text-mainyellow py-10">
      <div className="w-[1200px] mx-auto grid grid-cols-4 gap-5">
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
          <div className="mt-4 text-white font-light"></div>
        </div>
        <div>
          <h2 className="uppercase font-normal ">CLICK ĐỂ VÀO GOOGLE MAPS</h2>
          <div className="mt-4 text-white font-light"></div>
        </div>
        <div>
          <h2 className="uppercase font-normal ">TỔNG ĐÀI: 0962.243.863</h2>
          <div className="mt-4 text-white font-light">test</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
