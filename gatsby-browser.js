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

// Netlify Identity emails link to the site root. Send invite, recovery and
// confirmation links to the CMS, where the Identity widget handles them.
export function onInitialClientRender() {
  const hash = (document.location.hash || "").replace(/^#\/?/, "");
  if (/^(invite_token|recovery_token|confirmation_token|email_change_token)=/.test(hash)) {
    document.location.href = `/admin/#${hash}`;
  }
}
