import ProductCard from "@components/client/Product/ProductCard";
import { getDataByTypeProps } from "@lib/get-data";
import React from "react";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParamsValue: any = searchParams.type;
  let Data: any;
  if (searchParams === undefined) {
    Data = await getDataByTypeProps("products", "parentUrl", params.slug);
  } else {
    Data = await getDataByTypeProps("products", "typeUrl", searchParamsValue);
  }

  return (
    <div className="mt-9">
      <div>
        {Data.length > 0 ? (
          <>
            <h2 className="font-normal py-3 text-[24px] uppercase border-b w-full ">
              {searchParams === undefined ? (
                <> {Data[0].parent}</>
              ) : (
                <> {Data[0].type}</>
              )}
            </h2>
            <div className="grid grid-cols-4 gap-2 mt-5">
              {Data.map((item: any, idx: number) => (
                <div key={idx}>
                  <ProductCard Data={item} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
