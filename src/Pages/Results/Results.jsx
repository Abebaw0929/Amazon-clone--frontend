import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./Results.module.css";
import { productUrl } from "../../Api/endpoint";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  console.log(categoryName);
  // console.log(`${productUrl}/products/category/${categoryName}`);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setIsLoading(true);
    // https://fakestoreapi.com/products/category/jewelery
    axios
      .get(`${productUrl}/products/category/${categoryName}`)

      .then((res) => {
        console.log(res);

        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);
  return (
    <LayOut>
      <div>
        <h1 style={{ padding: "10px" }}>Results</h1>
        <p style={{ padding: "10px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          // <Loader />
          <p>Loading...</p>
        ) : (
          <div className={classes.products_container}>
            {results?.map((singleProduct) => {
              return (
                <ProductCard
                  key={singleProduct.id}
                  product={singleProduct}
                  renderAdd={true}
                />
              );
            })}
          </div>
        )}
      </div>
    </LayOut>
  );
}

export default Results;
