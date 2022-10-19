import { ReactElement } from "react";
import ReviewComponent from "../../components/ReviewComponent";

type ReviewPageProps = {
 shippingInfo: any,
 paymentInfo: any 
};

export const ReviewPage = ({ shippingInfo, paymentInfo }: ReviewPageProps): ReactElement => {
  return (
    <>
      <ReviewComponent
          shippingInfo
          paymentInfo
      />
    </>
  );
};
