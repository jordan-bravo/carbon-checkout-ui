import { Row, Column, TextInput } from 'carbon-components-react';
import { ReactElement } from 'react';
import SelectCardTypeComponent from '../SelectCardTypeComponent/SelectCardTypeComponent';

type PaymentComponentProps = {
    paymentInfo: any;
    setPaymentInfo: any;
    setPageNumber: any;
};

export const PaymentComponent = ({
    setPageNumber,
    paymentInfo,
    setPaymentInfo,
}: PaymentComponentProps): ReactElement => {
    const onChangeHandlerCardType = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        paymentInfo.cardType = e.target.value;
        setPaymentInfo({ ...paymentInfo });
    };
    const onChangeHandlerCardNumber = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        paymentInfo.cardNumber = e.target.value;
        setPaymentInfo({ ...paymentInfo });
    };
    const onChangeHandlerSecurityCode = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        paymentInfo.securityCode = e.target.value;
        setPaymentInfo({ ...paymentInfo });
    };
    return (
        <>
            <div className="shipping-wrapper">
                <Row className="flex padding-top-3 margin-bottom-1">
                    <Column>
                        <SelectCardTypeComponent
                            onChangeHandlerCardType={onChangeHandlerCardType}
                        />
                    </Column>
                </Row>
                <Row className="flex margin-top-1 margin-bottom-1">
                    <Column>
                        <TextInput
                            id="cardNumber"
                            labelText="Card Number"
                            value={paymentInfo.cardNumber}
                            placeholder="xxxx xxxx xxxx xxxx"
                            onChange={(e): void => onChangeHandlerCardNumber(e)}
                            invalidText="A valid value is required"
                        />
                    </Column>
                </Row>
                <Row className="flex margin-top-1">
                    <Column>
                        <TextInput
                            id="securityCode"
                            labelText="Security Code"
                            value={paymentInfo.securityCode}
                            placeholder="xxx"
                            invalidText="A valid value is required"
                            onChange={(e): void =>
                                onChangeHandlerSecurityCode(e)
                            }
                        />
                    </Column>
                </Row>
            </div>
        </>
    );
};
