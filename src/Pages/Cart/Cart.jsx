import React, { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Type } from "../../Utility/action.type";

import { IoIosArrowUp } from "react-icons/io";

import { IoIosArrowDown } from "react-icons/io";
import classes from "./Cart.module.css";
import ProductCard from "../../components/Product/ProductCard";
function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  console.log(basket);
  const totalprice = basket.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );
  // console.log(totalprice)
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <LayOut>
      <section className={classes.cart_container}>
        <div className={classes.item_container}>
          <h2>Hello</h2>
          <h3>Your Shoping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oh! Your basket is empty, pls add item!</p>
          ) : (
            basket?.map((item) => {
              return (
                <section key={item.id} className={classes.cart_product}>
                  {/* // ✅ Using unique item id */}
                  <ProductCard
                    product={item}
                    flex={true}
                    renderDesc={true}
                    renderADD={false}
                  />
                  <div className={classes.cart_addsub}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={35} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={35} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.checkout_container}>
            <div>
              <p>SubTotal({basket?.length} items)</p>
              <CurrencyFormat amount={totalprice} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gift</small>
            </span>
            <Link to="/payments">Proceed to Checkout</Link>
          </div>
        )}
        {console.log(basket.length)}
      </section>
    </LayOut>
  );
}

export default Cart;
