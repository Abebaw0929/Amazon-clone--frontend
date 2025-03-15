import React from "react";
import classes from "./Catagory.module.css";
import { Link } from "react-router-dom";

function CatagoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.category}`}>
        <span>
          <h2> {data?.title}</h2>
        </span>
        <img src={data?.imageLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;
