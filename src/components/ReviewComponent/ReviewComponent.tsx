import { ReactElement } from "react";
import { Row, Column, Button } from "carbon-components-react";

type ReviewComponentProps = {
  setPageType: Function;
};

export const ReviewComponent = ({
  setPageType,
}: ReviewComponentProps): ReactElement => {
  return (
    <>
      <Row className="flex">
        <Column>
          <Button kind="secondary" onClick={() => setPageType("payment")}>
            Back to payment
          </Button>
        </Column>
        <Column>
          <Button onClick={() => setPageType("complete")}>Submit order</Button>
        </Column>
      </Row>
    </>
  );
};
