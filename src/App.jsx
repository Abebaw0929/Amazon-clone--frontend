import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Catagory from "./components/Catagory/Catagory";
import Product from "./components/Product/Product";
import Routing from "./Router";
import { auth } from "./Utility/firebase";
import { DataContext } from "./components/DataProvider/DataProvider";
import { Type } from "./utility/action.type";
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser, " from firebase");
      if (authUser) {
        // console.log(authUser, "from in");
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // console.log(authUser, "from null");
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
