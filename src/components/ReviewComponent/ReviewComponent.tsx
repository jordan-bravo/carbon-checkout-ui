import { ReactElement } from 'react';

type ReviewComponentProps = {
   shippingInfo: any,
   paymentInfo: any
};

export const ReviewComponent = ({
    shippingInfo,
    paymentInfo
}: ReviewComponentProps): ReactElement => {
    return (
        <>
            <div className="complete-wrapper">
                <h1 className="flex justify-center">Your order is complete</h1>
                <h2 className="flex justify-center padding-bottom-1">Thank you</h2>
            </div>
        </>
    );
};
