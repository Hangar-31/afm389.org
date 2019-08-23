/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";

// Config
import _config from "./_config";

// Components
import { H31MainNavbar1, H31MainFooter1 } from "./h31/index";

// Images
import ImgFooterBackground from "./images/footer/ImgFooterBackground";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
        }
        .main-link-active {
          color: ${_config.colorSecondary} !important;
        }
        .main-link-active + div {
          width: 100%;
          background-color: ${_config.colorSecondary};
        }
        .main-mobile-link-active {
          color: ${_config.colorTertiary} !important;
        }
        .main-mobile-link-active + div {
          color: ${_config.colorTertiary} !important;
        }
      `}
    />

    <H31MainNavbar1
      topBarColor={_config.colorPrimary}
      bottomBarColor={_config.colorSecondary}
    />

    {children}

    <H31MainFooter1
      ImageComponent={<ImgFooterBackground />}
      topBarColor={_config.colorPrimary}
      bottomBarColor={_config.colorSecondary}
    />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
