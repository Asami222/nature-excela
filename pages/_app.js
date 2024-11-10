import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
import { cartState } from "store/cart";
import "/styles/globals.css";


function InitApp() {

  const setCart = useSetRecoilState(cartState)

  useEffect(() => {
    const cookies = parseCookies();

    if(cookies.cart !==undefined) {

      const cookiesCart = JSON.parse(cookies.cart);
      if(cookiesCart.products.length > 0) {
        setCart({
          products: cookiesCart.products
        });
      }
    }
  },[setCart]);
  return null;
}

function WatchCart() {

  const cart = useRecoilValue(cartState);
  useEffect(() => {
    setCookie(null, "cart", JSON.stringify(cart));
  },[cart]);
  return null;
}

function MyApp({ Component, pageProps }) {

  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <InitApp />
      <WatchCart />
    </RecoilRoot>
  )
}

export default MyApp
