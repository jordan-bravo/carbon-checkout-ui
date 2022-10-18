import { ReactElement } from "react";
import {
  Row,
  Column,
  ProgressIndicator,
  ProgressStep,
} from "carbon-components-react";

type ProgressComponentProps = {
  progressType: string;
};

const getProgressIndexFromType = (progressType: string): number => {
  if (progressType === "cart") return 0;
  else if (progressType === "shipping") return 1;
  else if (progressType === "payment") return 2;
  else if (progressType === "review") return 3;
  else return 0;
};

export const ProgressIndicatorComponent = ({
  progressType,
}: ProgressComponentProps): ReactElement => {
  return (
    <>
      <Row>
        <Column>
          <ProgressIndicator
            currentIndex={getProgressIndexFromType(progressType)}
          >
            <ProgressStep label="Cart" />
            <ProgressStep label="Shipping" />
            <ProgressStep label="Payment" />
            <ProgressStep label="Review" />
          </ProgressIndicator>
        </Column>
      </Row>
    </>
  );
};
