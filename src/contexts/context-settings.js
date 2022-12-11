import React, { createContext } from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "@emotion/react";

export const ContextSettings = createContext();

export function ContextSettingsProvider(props) {
  const { children, settings } = props;
  // if (!settings) return <>{children}</>;

  settings.colorNegative = "#EC4067";
  settings.colorPositive = "#38A442";
  settings.colorWhite = "#FFFFFF";
  settings.colorOffWhite = "#FDFDFD";
  settings.colorDisabled = "#D7D7D7";
  settings.colorHint = "#7D7D7D";
  settings.colorDarkGray = "#4C4C4C";
  settings.colorBlack = "#000000";

  return (
    <ContextSettings.Provider value={settings}>
      <ThemeProvider theme={settings}>{children}</ThemeProvider>
    </ContextSettings.Provider>
  );
}

ContextSettingsProvider.defaultProps = {
  settings: {},
};
ContextSettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.objectOf(PropTypes.string),
};
