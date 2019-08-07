/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

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
      `}
    />

    <Helmet>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Helmet>

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
