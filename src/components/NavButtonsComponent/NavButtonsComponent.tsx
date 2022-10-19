import { Button } from 'carbon-components-react';
import { Dispatch, SetStateAction } from 'react';

type NavButtonsComponentProps = {
    pageNumber: number;
    setPageNumber: Dispatch<SetStateAction<number>>;
};

const pageNames = ['cart', 'shipping', 'payment', 'review'];

const NavButtonsComponent = ({
    pageNumber,
    setPageNumber,
}: NavButtonsComponentProps) => {
    return (
        <>
            <div className="flex shipping-input justify-between">
                <Button
                    kind="secondary"
                    onClick={(): void => setPageNumber(pageNumber - 1)}
                    className={
                        'min-height-4 width-12 ' +
                        (pageNumber === 3 || pageNumber === 0
                            ? 'visibility-hidden'
                            : '')
                    }
                >
                    Back to {pageNames[pageNumber - 1]}
                </Button>
                <Button
                    onClick={(): void => setPageNumber(pageNumber + 1)}
                    className={
                        'min-height-4 width-12 ' +
                        (pageNumber === 3 ? 'visibility-hidden' : '')
                    }
                >
                    {pageNumber === 0 || pageNumber === 1 ? 'Proceed to ' + pageNames[pageNumber + 1] : 'Complete order'}
                </Button>
            </div>
        </>
    );
};

export default NavButtonsComponent;
