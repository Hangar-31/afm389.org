import "./src/styles/bootstrap.min.css";
import PropTypes from "prop-types";

const React = require("react");
const { ContextSettingsProvider } = require("./src/contexts/context-settings");

// eslint-disable-next-line import/prefer-default-export
export function wrapRootElement({ element }) {
  return <ContextSettingsProvider>{element}</ContextSettingsProvider>;
}

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
