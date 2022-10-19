import { ReactElement, useState } from 'react';
import { Dropdown } from 'carbon-components-react';
import { listOfUnitedStates } from '../../data/listOfUnitedStates';

type SelectUnitedStateComponentProps = {
    onChangeHandlerState: Function;
};

export const SelectUnitedStateComponent = ({
    onChangeHandlerState,
}: SelectUnitedStateComponentProps): ReactElement => {
    const [currentItem, setCurrentItem] = useState({ id: 'select', text: 'Select'});
    return (
        <>
            <Dropdown
                items={listOfUnitedStates}
                itemToString={(item) => (item ? item.text : '')}
                id="state"
                label="Select State"
                titleText="State"
                // onChange={({ selectedItem }) => setCurrentItem(selectedItem)}
                // selectedItem={currentItem}
            />
        </>
    );
};
