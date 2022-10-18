import { ReactElement } from "react";
import ProgressComponent from "../../components/ProgressComponent";
import CartComponent from "../../components/CartComponent";

type CartPageProps = {
  setPageType: Function;
  count: number;
  setCount: Function;
};

export const CartPage = ({
  setPageType,
  count,
  setCount,
}: CartPageProps): ReactElement => {
  return (
    <>
      <ProgressComponent progressType="cart" />
      <CartComponent
        count={count}
        setCount={setCount}
        setPageType={setPageType}
      />
    </>
  );
};
