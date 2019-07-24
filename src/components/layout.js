/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

import {
  H31MainNavbarSplitActions,
  H31ButtonBright,
  H31ButtonHollow,
  H31Title1,
  H31Title2,
  H31Link1,
  H31Text1,
  H31Text2,
  H31LinkBarHorizontal,
  H31LinkTallUnderline,
  H31SocialBarHorizontal
} from "./h31/index";

import ImgLogo from "./images/ImgLogo";
import SocialIcons from "./h31/socials/SocialIcons";
import _config from "./_config";

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
        ${H31Title1} {
          color: ${_config.colorWhite};
          font-family: Sarpanch;
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Title2} {
          color: ${_config.colorWhite};
          font-size: 2.5rem;
          font-family: Sarpanch;
          font-weight: bold;
          text-transform: uppercase;
        }
        ${H31Link1} {
          color: ${_config.colorWhite};
          font-family: Roboto Slab;
          font-size: 0.8rem;
          text-transform: uppercase;
        }
        ${H31Text1} {
          color: ${_config.colorWhite};
          font-family: Roboto Slab;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 0.8rem;
        }
        ${H31Text2} {
          color: ${_config.colorWhite};
          font-family: Roboto Slab;
          font-size: 1.25rem;
        }
      `}
    />
    <H31MainNavbarSplitActions
      topBarColor={_config.colorPrimary}
      bottomBarColor={_config.colorSecondary}
      TitleComponent={
        <H31Title1
          css={css`
            position: relative;
            text-align: center;
          `}
        >
          CFMA Local 389
          <br />
          <span
            css={css`
              position: absolute;
              font-size: 0.625rem;
              white-space: none;
              width: 120%;
              left: -10%;
              right: 0;
              margin: 0 auto;
            `}
          >
            Central FL Musicians Association
          </span>
        </H31Title1>
      }
      LogoComponent={<ImgLogo />}
      LinkBarComponent={
        <H31LinkBarHorizontal
          linkComponents={_config.mainNav.map(link => (
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
      SocialBarComponent={
        <H31SocialBarHorizontal
          socialComponents={_config.socials.map(social => (
            <SocialIcons
              color={_config.colorWhite}
              social={social.social}
              link={social.link}
            />
          ))}
        />
      }
      TextComponent={<H31Text2>Don&apos;t Go It Alone</H31Text2>}
      ButtonComponentTop={
        <H31ButtonHollow
          buttonColor={_config.colorWhite}
          hoverColor={_config.colorTertiary}
          TextComponent={<H31Text1>Member Log In</H31Text1>}
        />
      }
      ButtonComponentBottom={
        <H31ButtonBright
          borderColor={_config.colorWhite}
          backgroundColor={_config.colorTertiary}
          TextComponent={<H31Text1>Join Now!</H31Text1>}
        />
      }
    />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
