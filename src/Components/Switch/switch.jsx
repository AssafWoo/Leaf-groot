import React from "react";
import { SwitchContent, SwitchWrapper } from "../../Styles/styles";

export const SwitchToggleButton = ({selected, toggleSelected}) => {

    return (
      <SwitchWrapper onClick={toggleSelected}>
        <SwitchContent className={`dialog-button ${selected ? "" : "disabled"}`}>
          {selected ? "CO2" : "Transactions"}
        </SwitchContent>
      </SwitchWrapper>
    );
}

