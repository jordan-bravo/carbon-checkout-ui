import { ReactElement } from "react";
import { Row, Column, Button } from "carbon-components-react";

type PaymentComponentProps = {
  setPageType: Function;
};

export const PaymentComponent = ({
  setPageType,
}: PaymentComponentProps): ReactElement => {
  return (
    <>
      <Row className="flex">
        <Column>
          <Button kind="secondary" onClick={() => setPageType("shipping")}>
            Back to shipping
          </Button>
        </Column>
        <Column>
          <Button onClick={() => setPageType("review")}>
            Proceed to review
          </Button>
        </Column>
      </Row>
    </>
  );
};
