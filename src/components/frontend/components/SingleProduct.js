import React, { useEffect, useState } from "react";
import data from "../../../Data/Data";
import { useParams } from "react-router-dom";
import Buynow from "../../Buynow";

const SingleProduct = () => {
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
        <table className="table-auto">
          <thead>
            <tr>
              <th>Description</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Material:</td>
              <td>
                pine wooden, sugarcane bagasse, sawdust, rice husk , eucalyptus
                wooden, acacia wooden, cashew wooden
              </td>
            </tr>
            <tr>
              <td>Diameter:</td>
              <td>6mm or 8mm or 90mm</td>
            </tr>
            <tr>
              <td>Length:</td>
              <td>30 - 50mm</td>
            </tr>
            <tr>
              <td>Moisture content</td>
              <td> {`< 10%`} </td>
            </tr>
            <tr>
              <td>Ash content</td>
              <td> {`< 4%`} </td>
            </tr>
            <tr>
              <td>Net calorific value:</td>
              <td> 4300-4800 kcal/kg </td>
            </tr>
            <tr>
              <td>Bulk density:</td>
              <td> 730kg/m3 </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-2 py-1 bg-[#201A59] m-2 text-white text-sm rounded">
        <Buynow title={singleProduct.title} />
      </div>
    </div>
  );
};

export default SingleProduct;
