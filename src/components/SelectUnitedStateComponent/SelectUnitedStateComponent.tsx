import { ReactElement } from "react";
import { Select, SelectItem } from "carbon-components-react";
import { listOfUnitedStates } from "../../data/listOfUnitedStates";

type SelectUnitedStateComponentProps = {
  onChangeHandlerState: Function;
};

export const SelectUnitedStateComponent = ({
  onChangeHandlerState,
}: SelectUnitedStateComponentProps): ReactElement => {
  return (
    <Select
      id="state"
      labelText="State"
      defaultValue="test"
      onChange={(e): void => onChangeHandlerState(e)}
    >
      {/* TODO selected state value (i.e. shippingInfo.state) should persist when switching pages */}
      <SelectItem hidden text="Select State" value="placeholder-item" />
      {listOfUnitedStates.map((element) => {
        return (
          <SelectItem
            key={element.value}
            text={element.text}
            value={element.value}
          />
        );
      })}
    </Select>
  );
};
