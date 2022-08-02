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
    // <div className="p-20">
    //   <h1>{singleProduct.title}</h1>
    //   <img src={singleProduct.img} alt={singleProduct.title} />
    // </div>
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
      <div className="px-2 py-1 bg-[#201A59] m-2 text-white text-sm rounded">
        <Buynow title={singleProduct.title} />
      </div>
    </div>
  );
};

export default SingleProduct;
