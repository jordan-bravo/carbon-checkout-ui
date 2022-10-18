import { ReactElement } from "react";
import ProgressComponent from "../../components/ProgressComponent";
import PaymentComponent from "../../components/PaymentComponent";

type PaymentPageProps = {
  setPageType: Function;
};

export const PaymentPage = ({
  setPageType,
}: PaymentPageProps): ReactElement => {
  return (
    <>
      <ProgressComponent progressType="payment" />
      <PaymentComponent setPageType={setPageType} />
    </>
  );
};
