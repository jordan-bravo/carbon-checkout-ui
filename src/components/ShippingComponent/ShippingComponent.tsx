import { ReactElement } from "react";
import { Row, Column, TextInput, Button } from "carbon-components-react";
import { ShippingInfo } from "../../models/shippingInfo";
import SelectUnitedStateComponent from "../SelectUnitedStateComponent";

type ShippingComponentProps = {
  setPageType: Function;
  shippingInfo: ShippingInfo;
  setShippingInfo: Function;
};

export const ShippingComponent = ({
  setPageType,
  shippingInfo,
  setShippingInfo,
}: ShippingComponentProps): ReactElement => {
  // Change Handler Methods
  const onChangeHandlerAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    shippingInfo.address = e.target.value;
    setShippingInfo({ ...shippingInfo });
  };
  const onChangeHandlerAddress2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    shippingInfo.address2 = e.target.value;
    setShippingInfo({ ...shippingInfo });
  };
  const onChangeHandlerCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    shippingInfo.city = e.target.value;
    setShippingInfo({ ...shippingInfo });
  };
  const onChangeHandlerState = (e: any) => {
    shippingInfo.state = e.target.value;
    setShippingInfo({ ...shippingInfo });
  };
  const onChangeHandlerZip = (e: React.ChangeEvent<HTMLInputElement>) => {
    shippingInfo.zip = e.target.value;
    setShippingInfo({ ...shippingInfo });
  };

  return (
    <>
      <Row className="flex shipping-input">
        <Column>
          <TextInput
            id="address"
            invalidText="A valid value is required"
            labelText="Address"
            value={shippingInfo.address}
            placeholder="Street address"
            onChange={(e): void => onChangeHandlerAddress(e)}
          />
        </Column>
      </Row>
      <Row className="flex shipping-input">
        <Column>
          <TextInput
            id="address2"
            labelText="Address 2 (optional)"
            value={shippingInfo.address2}
            placeholder="Apartment, unit, suite"
            onChange={(e): void => onChangeHandlerAddress2(e)}
            invalidText="A valid value is required"
          />
        </Column>
      </Row>
      <Row className="flex shipping-input">
        <Column>
          <TextInput
            id="city"
            labelText="City"
            value={shippingInfo.city}
            placeholder=""
            invalidText="A valid value is required"
            onChange={(e): void => onChangeHandlerCity(e)}
          />
        </Column>
      </Row>
      <Row className="flex shipping-input">
        <Column>
          <SelectUnitedStateComponent
            onChangeHandlerState={onChangeHandlerState}
          />
        </Column>
      </Row>
      <Row className="flex shipping-input">
        <Column>
          <TextInput
            id="zip"
            labelText="Zip code"
            value={shippingInfo.zip}
            placeholder=""
            invalidText="A valid value is required"
            onChange={(e): void => onChangeHandlerZip(e)}
          />
        </Column>
      </Row>
      <Row className="flex shipping-input">
        <Column>
          <Button kind="secondary" onClick={(): void => setPageType("cart")}>
            Back to cart
          </Button>
        </Column>
        <Column>
          <Button onClick={(): void => setPageType("payment")}>
            Proceed to payment
          </Button>
        </Column>
      </Row>
    </>
  );
};
