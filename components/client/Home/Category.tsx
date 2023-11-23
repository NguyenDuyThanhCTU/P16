import React from "react";

const Category = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div>
          <img
            src="https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/logo.png?1698827078537"
            alt="banner"
          />
        </div>
        <div className="flex items-center gap-5">
          <div>
            <img
              src="https://bizweb.dktcdn.net/100/371/178/themes/743610/assets/policy_1_image.png?1698827078537"
              alt="slogan"
            />
          </div>
          <div>
            <h2 className="font-normal">Sơ chế tận tay</h2>
            <p>Nhận ngay về nấu</p>
          </div>
        </div>
        <div>
          <div className="bg-maingreen flex gap-3 justify-start items-center py-3">
            <div className="h-max w-10 bg-black"></div>
            <div>
              <></>
            </div>
            <div className="uppercase">Danh mục sản phẩm</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
