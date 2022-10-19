import { ReactElement } from "react";
import PaymentComponent from "../../components/PaymentComponent";

type PaymentPageProps = {
  setPageNumber: Function;
  paymentInfo: any
  setPaymentInfo: any
};

export const PaymentPage = ({
  setPageNumber,
  paymentInfo,
  setPaymentInfo
}: PaymentPageProps): ReactElement => {
  return (
    <>
      <PaymentComponent setPageNumber={setPageNumber} 
      paymentInfo={paymentInfo}
      setPaymentInfo={setPaymentInfo}
      />
    </>
  );
};
