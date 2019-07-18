// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
