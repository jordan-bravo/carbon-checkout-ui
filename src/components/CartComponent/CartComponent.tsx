import { ReactElement } from 'react';
import { Button } from 'carbon-components-react';
import pinata from '../../images/pinata.png';

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
            <div className="item-wrapper">
                <h2 className="flex justify-center padding-top-3">Item: Pinata</h2>
                <div className="image-wrapper flex justify-center padding-top-3">
                 <img alt='item' src={pinata} width={170} height={200}></img>
                </div>
                <div className="flex justify-center padding-top-3">
                    <h2 className="padding-right-1">Count: </h2>
                    <Button
                        kind="secondary"
                        onClick={() =>
                            count > 0 ? setCount(count - 1) : setCount(0)
                        }
                        className="buttons"
                    >
                        -
                    </Button>
                    <h2 className="count-number">{count}</h2>
                    <Button
                        kind="secondary"
                        onClick={() => setCount(count + 1)}
                        className="buttons"
                    >
                        +
                    </Button>
                </div>
            </div>
        </>
    );
};
