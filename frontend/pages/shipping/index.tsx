import Head from "next/head";
import router from "next/router";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import { cartInit, shippingAddressInit } from "reducers/cartSlice";
import { userInit } from "reducers/userInfoSlice";
import ShippingScreen from "screens/ShippingScreen";
import { initData } from "utils/initData";

const Shipping = () => {
  const dispatch = useDispatch();

  const { user, cartItems, shippingAddress } = initData();

  useEffect(() => {
    if (user) {
      dispatch(userInit(user));
    } else {
      router.push("/login");
      return;
    }

    if (cartItems) {
      dispatch(cartInit(cartItems));
    }
    if (shippingAddress) {
      dispatch(shippingAddressInit(shippingAddress));
    }
  }, [user, cartItems, shippingAddress]);

  return (
    <Fragment>
      <Head>
        <title>Stonkify | Shipping Details</title>
      </Head>
      <div>
        <ShippingScreen
          cartItems={cartItems}
          shippingAddress={shippingAddress}
        />
      </div>
    </Fragment>
  );
};

export default Shipping;