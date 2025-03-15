import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
// import SignUp from "./Pages/Auth/SignUp";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import Payment from "./Pages/Payment/Payment";
import Landing from "./Pages/Landing/Landing";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51Qzu8e4eV5OrsPuVB3VPCM2l6tN4pcG492T9IqnWN81Spfgaf1QEmP5db16mfbmmCNtrxKLUjt0aYwTNrrj2wTp600OcQq9gcd"
);
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders"
           element={ <ProtectedRoute
              msg= {"You must log in to  access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route
            path="/payments"
            element={<ProtectedRoute
              msg={"You must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
              
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
