/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Global, css } from "@emotion/core";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import RobotoSlabVar from "../../static/fonts/RobotoSlabVar.ttf";

// Config
import _config from "./_config";

// Components
import { H31MainNavbar1, H31MainFooter1, H31Text3 } from "./h31/index";

// Images
import ImgFooterBackground from "./images/footer/ImgFooterBackground";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
        }
        [data-reach-skip-link] {
          position: absolute;
          z-index: 1;
          top: -30px;
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
        #blog-html-styles {
          li {
            ${H31Text3.__emotion_styles}
          }
        }
        @font-face {
          font-family: "Roboto Slab";
          src: url(${RobotoSlabVar}) format("truetype");
          font-weight: normal;
          font-style: normal;
        }
      `}
    />

    <Helmet>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      <script src="https://code.jquery.com/pep/0.4.3/pep.js" />
    </Helmet>

    <SkipNavLink />

    <H31MainNavbar1
      topBarColor={_config.colorPrimary}
      bottomBarColor={_config.colorSecondary}
    />

    <SkipNavContent />

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
