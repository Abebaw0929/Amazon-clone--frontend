import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endpoint";
import ProductCard from "../../components/Product/ProductCard";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  //   console.log(productId);
  const [Product, setProduct] = useState({});
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(true);
    //https://fakestoreapi.com/products/7
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          data={Product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
