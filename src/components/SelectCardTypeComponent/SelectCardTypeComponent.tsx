import { ReactElement, useState } from "react";
import { Dropdown } from "carbon-components-react";
import { listOfCardTypes } from "../../data/listOfCardTypes";

type SelectCardTypeComponentProps = {
  onChangeHandlerCardType: Function;
};

const SelectCardTypeComponent = ({
  onChangeHandlerCardType,
}: SelectCardTypeComponentProps): ReactElement => {
    const [currentItem, setCurrentItem] = useState({ id: 'select', text: 'Select Card Type'});
  return (
    <Dropdown 
      items={listOfCardTypes}
      itemToString={(item) => (item ? item.text : '')}
      id='cardType'
      label="Select Card Type"
      titleText="Card Type"
    //   onChange={({ selectedItem }) => setCurrentItem(selectedItem)}
    //   selectedItem={currentItem}
    />
  );
};

export default SelectCardTypeComponent;