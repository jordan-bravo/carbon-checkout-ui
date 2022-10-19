import { Dispatch, ReactElement, SetStateAction } from 'react';
import {
    Row,
    Column,
    ProgressIndicator,
    ProgressStep,
} from 'carbon-components-react';

type ProgressComponentProps = {
    pageNumber: number;
    setPageNumber: Dispatch<SetStateAction<number>>;
};

export const ProgressIndicatorComponent = ({
    pageNumber,
    setPageNumber,
}: ProgressComponentProps): ReactElement => {
    return (
        <>
            <Row>
                <Column>
                    <ProgressIndicator currentIndex={pageNumber}>
                        <ProgressStep
                            label="Cart"
                            onClick={() => setPageNumber(0)}
                        />
                        <ProgressStep
                            label="Shipping"
                            onClick={() => setPageNumber(1)}
                        />
                        <ProgressStep
                            label="Payment"
                            onClick={() => setPageNumber(2)}
                        />
                        <ProgressStep
                            label="Complete"
                            onClick={() => setPageNumber(3)}
                        />
                    </ProgressIndicator>
                </Column>
            </Row>
        </>
    );
};
