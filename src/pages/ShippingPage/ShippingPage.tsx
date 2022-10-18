import { ReactElement } from "react";
import ProgressComponent from "../../components/ProgressComponent";
import ShippingComponent from "../../components/ShippingComponent";
import { ShippingInfo } from "../../models/shippingInfo";

type ShippingPageProps = {
  setPageType: Function;
  shippingInfo: ShippingInfo;
  setShippingInfo: Function;
};

export const ShippingPage = ({
  setPageType,
  shippingInfo,
  setShippingInfo,
}: ShippingPageProps): ReactElement => {
  return (
    <>
      <ProgressComponent progressType="shipping" />
      <ShippingComponent
        setPageType={setPageType}
        shippingInfo={shippingInfo}
        setShippingInfo={setShippingInfo}
      />
    </>
  );
};
