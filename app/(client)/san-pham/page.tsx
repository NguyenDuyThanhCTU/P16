import DisplayProduct from "@components/client/Product/DisplayProduct";
import { getAllDataProps } from "@lib/get-data";
import React from "react";

const DisplayProductPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let Products = await getAllDataProps("products");
  let Data: any;
  const searchParamsValue: any = searchParams.search;
  if (Object.keys(searchParams).length !== 0) {
    Data = Products?.filter((product: any) =>
      product.title.toLowerCase().includes(searchParamsValue.toLowerCase())
    );
  } else {
    Data === Products;
  }
  return (
    <div>
      {Object.keys(searchParams).length !== 0 ? (
        <>
          <div className="w-full mt-4 py-5 bg-gray-300">
            <div className="px-4">
              Kết quả tìm kiếm cho từ khóa: "
              <span className="font-bold">{searchParamsValue}</span>"
            </div>
          </div>
          <DisplayProduct
            Data={Data}
            topic={`Tất cả sản phẩm "${searchParamsValue}"`}
          />
        </>
      ) : (
        <>
          <DisplayProduct Data={Data} topic="Tất cả sản phẩm" />
        </>
      )}
    </div>
  );
};

export default DisplayProductPage;
