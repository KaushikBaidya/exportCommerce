import React, { useEffect, useState } from "react";
import data from "../../../Data/Data";
import { useParams } from "react-router-dom";
import Buynow from "../../Buynow";
import { useTranslation } from "react-i18next";

const SingleProduct = () => {
  const { t } = useTranslation(["product"]);
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const findProduct = data.find((product) => product.id === id);
    setSingleProduct(findProduct);
  }, [id]);

  return (
    <div className="w-full grid content-center justify-items-center py-20">
      <img
        src={singleProduct.img}
        className="h-72 rounded-lg shadow-xl"
        alt=""
      />
      <div className="mt-2">
        <h1 className="text-base text-center font-semibold text-green-600">
          {singleProduct.title}
        </h1>

        <p className="text-base text-center font-semibold">
          {singleProduct.price}
        </p>
      </div>
      <div className="max-w-2xl mx-auto my-10">
        <table className="table-auto border-separate border-spacing-8 ">
          <thead>
            <tr>
              <th>{t("tb1")}</th>
              <th>{t("tb1")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("tb3")}</td>
              <td>{t("d1")}</td>
            </tr>
            <tr>
              <td>{t("tb4")}</td>
              <td>6mm or 8mm or 90mm</td>
            </tr>
            <tr>
              <td>{t("tb5")}</td>
              <td>30 - 50mm</td>
            </tr>
            <tr>
              <td>{t("tb6")}</td>
              <td> {`< 10%`} </td>
            </tr>
            <tr>
              <td>{t("tb7")}</td>
              <td> {`< 4%`} </td>
            </tr>
            <tr>
              <td>{t("tb8")}</td>
              <td> 4300-4800 kcal/kg </td>
            </tr>
            <tr>
              <td>{t("tb9")}</td>
              <td> 730kg/m3 </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-2 py-1 bg-[#F5921E] m-2 text-white text-sm rounded">
        <Buynow title={singleProduct.title} />
      </div>
    </div>
  );
};

export default SingleProduct;
