import { ReactElement } from "react";
import ShippingComponent from "../../components/ShippingComponent";
import { ShippingInfo } from "../../models/shippingInfo";

type ShippingPageProps = {
  setPageNumber: Function;
  shippingInfo: ShippingInfo;
  setShippingInfo: Function;
};

export const ShippingPage = ({
  setPageNumber,
  shippingInfo,
  setShippingInfo,
}: ShippingPageProps): ReactElement => {
  return (
    <>
      <ShippingComponent
        setPageNumber={setPageNumber}
        shippingInfo={shippingInfo}
        setShippingInfo={setShippingInfo}
      />
    </>
  );
};
