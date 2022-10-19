import { ReactElement } from "react";
import CartComponent from "../../components/CartComponent";

type CartPageProps = {
  setPageNumber: Function;
  count: number;
  setCount: Function;
};

export const CartPage = ({
  setPageNumber,
  count,
  setCount,
}: CartPageProps): ReactElement => {
  return (
    <>
      <CartComponent
        count={count}
        setCount={setCount}
        setPageType={setPageNumber}
      />
    </>
  );
};
