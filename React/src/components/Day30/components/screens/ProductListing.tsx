import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../actions/index";

import CardComponent from "../Card";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-around pb-4">
      {products.map((product: any) => (
        <CardComponent
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductListing;