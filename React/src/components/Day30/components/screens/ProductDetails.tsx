import React from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions";

const ProductDetails = () => {
  const products = useSelector((state: any) => state.products);
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const currProduct = products.find((product: any) => {
    return product.id == id;
  });

  return (
    <div className="product-details d-flex justify-content-evenly ">
      <div>
        <img width="300" height="400" src={currProduct.image} alt="" />
      </div>
      <div className="w-50">
        <h1>{currProduct.title}</h1>
        <p>{currProduct.description}</p>
        <h2>Price: ₹ {currProduct.price * 1000}</h2>
        <div>
          <button className="btn btn-outline-primary btn-lg ">Buy Now</button>
          <button
            className="btn btn-outline-primary btn-lg "
            onClick={() => {
              dispatch(
                addToCart({
                  id: currProduct.id,
                  title: currProduct.title,
                  price: currProduct.price,
                  image: currProduct.image,
                })
              );
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;