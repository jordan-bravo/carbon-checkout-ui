import { ReactElement } from "react";
import { Button, Column, Row } from "carbon-components-react";

type CartComponentProps = {
  setPageType: Function;
  count: number;
  setCount: Function;
};

export const CartComponent = ({
  setPageType,
  count,
  setCount,
}: CartComponentProps): ReactElement => {
  return (
    <>
      <Row>
        <h1>Item: Pinata</h1>
      </Row>
      <Row>
        <h1>Count: </h1>
        {/* TODO disable decrement button when count === 0 */}
        {/* {count === 0 && disabled} */}
        <Button kind="secondary" onClick={() => setCount(count - 1)}>
          -
        </Button>
        <h1>{count}</h1>
        <Button kind="secondary" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </Row>
      <Row className="flex">
        <Column>
          <Button onClick={() => setPageType("shipping")}>
            Proceed to shipping
          </Button>
        </Column>
      </Row>
    </>
  );
};
