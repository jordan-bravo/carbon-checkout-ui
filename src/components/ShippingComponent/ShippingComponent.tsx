import { ReactElement } from 'react';
import { Row, Column, TextInput } from 'carbon-components-react';
import { ShippingInfo } from '../../models/shippingInfo';
import SelectUnitedStateComponent from '../SelectUnitedStateComponent';

type ShippingComponentProps = {
    setPageNumber: Function;
    shippingInfo: ShippingInfo;
    setShippingInfo: Function;
};

export const ShippingComponent = ({
    setPageNumber,
    shippingInfo,
    setShippingInfo,
}: ShippingComponentProps): ReactElement => {
    // Change Handler Methods
    const onChangeHandlerAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        shippingInfo.address = e.target.value;
        setShippingInfo({ ...shippingInfo });
    };
    const onChangeHandlerAddress2 = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
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
            <div className="shipping-wrapper">
                <Row className="flex padding-top-3 margin-bottom-1">
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
                <Row className="flex margin-top-1 margin-bottom-1">
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
                <Row className="flex margin-top-1 margin-bottom-1">
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
                <Row className="flex margin-top-1 margin-bottom-1">
                    <Column>
                        <SelectUnitedStateComponent
                            onChangeHandlerState={onChangeHandlerState}
                        />
                    </Column>
                </Row>
                <Row className="flex margin-top-1">
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
            </div>
        </>
    );
};
