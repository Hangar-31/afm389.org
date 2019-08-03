/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

import _config from "./_config";

import {
  H31MainNavbar1,
  H31Title2B,
  H31Title4C,
  H31Link1,
  H31LinkBarHorizontal,
  H31LinkTallUnderline,
  H31SocialBarHorizontal,
  H31MainFooter1,
  H31Form1,
  H31SocialIcons,
  H31Sitemap1
} from "./h31/index";

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
      TitleComponent={
        <H31Title2B
          css={css`
            color: #ffffff;
          `}
        >
          Get In Touch
        </H31Title2B>
      }
      ImageComponent={<ImgFooterBackground />}
      FormComponent={<H31Form1 />}
      topBarColor={_config.colorPrimary}
      bottomBarColor={_config.colorSecondary}
      LinkBarComponent={
        <H31LinkBarHorizontal
          linkComponents={_config.footerNav.map(link => (
            <H31LinkTallUnderline
              key="main-links-for-hangar-31"
              linkColor={_config.colorWhite}
              linkHoverColor={_config.colorSecondary}
              underlineColor={_config.colorSecondary}
              underlineHoverColor={_config.colorSecondary}
              LinkComponent={
                <H31Link1 activeClassName="main-link-active" to={link.to}>
                  {link.name}
                </H31Link1>
              }
            />
          ))}
        />
      }
      SitemapComponent={<H31Sitemap1 />}
      SocialBarComponent={
        <H31SocialBarHorizontal
          socialComponents={_config.socials.map(social => (
            <H31SocialIcons
              color={_config.colorWhite}
              social={social.social}
              link={social.link}
              colorHover={_config.colorTertiary}
            />
          ))}
        />
      }
      CopyrightComponent={
        <H31Title4C
          css={css`
            cursor: initial;
          `}
        >
          CENTRAL FLORIDA MUSICIANS ASSOCIATION COPYRIGHT&nbsp;
          {new Date().getFullYear()}
        </H31Title4C>
      }
    />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
