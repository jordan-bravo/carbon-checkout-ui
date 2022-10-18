import { ReactElement } from "react";
import { Row, Column } from "carbon-components-react";

// type CompleteComponentProps = {
// };

export const CompleteComponent = (): ReactElement => {
  return (
    <>
      <Row className="flex">
        <Column>
          <h1>Your order is complete.</h1>
          <h2>Thank you</h2>
        </Column>
      </Row>
    </>
  );
};
