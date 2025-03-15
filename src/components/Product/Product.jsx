import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";
function Product() {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.product_contianer}>
          {product?.map((single_product, i) => {
            return (
              <ProductCard renderAdd={true} key={i} product={single_product} />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Product;
