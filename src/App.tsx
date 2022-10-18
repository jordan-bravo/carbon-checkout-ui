import { ReactElement, useState } from "react";
import "./app.scss";
import { Content, Grid } from "carbon-components-react";
import ShippingPage from "./pages/ShippingPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import ReviewPage from "./pages/ReviewPage";
import CompletePage from "./pages/CompletePage";
import HeaderComponent from "./components/HeaderComponent";

const App = (): ReactElement => {
  const [pageType, setPageType] = useState("cart");
  const [count, setCount] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  console.log(`shippingInfo`, shippingInfo);
  console.log(`typeof shippingInfo.zip`, typeof shippingInfo.zip);
  return (
    <>
      <HeaderComponent />
      <Content>
        <Grid>
          {pageType === "cart" && (
            <CartPage
              count={count}
              setCount={setCount}
              setPageType={setPageType}
            />
          )}
          {pageType === "shipping" && (
            <ShippingPage
              setPageType={setPageType}
              shippingInfo={shippingInfo}
              setShippingInfo={setShippingInfo}
            />
          )}
          {pageType === "payment" && <PaymentPage setPageType={setPageType} />}
          {pageType === "review" && <ReviewPage setPageType={setPageType} />}
          {pageType === "complete" && <CompletePage />}
        </Grid>
      </Content>
    </>
  );
};

export default App;
