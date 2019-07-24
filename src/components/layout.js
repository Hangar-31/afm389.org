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
  H31Button1,
  H31Button2,
  H31Title1A,
  H31Title1B,
  H31Title2A,
  H31Title2B,
  H31Title2C,
  H31Title3,
  H31Link1,
  H31Text1,
  H31Text2,
  H31Text3,
  H31Text4,
  H31LinkBarHorizontal,
  H31LinkTallUnderline,
  H31SocialBarHorizontal
} from "./h31/index";

import ImgLogo from "./images/logos/ImgLogo";
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
        ${H31Title1A} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontSecondary};
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Title1B} {
          color: ${_config.colorWhite};
          font-size: 3.75rem;
          font-family: ${_config.fontTertiary};
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Title1B} {
          color: ${_config.colorWhite};
          font-size: 3.75rem;
          font-family: ${_config.fontTertiary};
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Title2A} {
          color: ${_config.colorWhite};
          font-size: 2.5rem;
          font-family: ${_config.fontTertiary};
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Title2B} {
          color: ${_config.colorSecondary};
          font-size: 1.25rem;
          font-family: ${_config.fontTertiary};
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Title2C} {
          color: ${_config.colorSecondary};
          font-size: 3.75rem;
          font-family: ${_config.fontTertiary};
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Title3} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-weight: bold;
          font-size: 1.25rem;
        }
        ${H31Link1} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-size: 0.8rem;
          text-transform: uppercase;
        }
        ${H31Text1} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontTertiary};
          text-transform: uppercase;
          font-weight: regular;
          font-size: 1.5rem;
          line-height: 1.5;
        }
        ${H31Text2} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-size: 1.25rem;
          line-height: 1.5;
        }
        ${H31Text3} {
          color: ${_config.colorLightGrey};
          font-family: ${_config.fontQuintery};
          font-size: 1.125rem;
          line-height: 1.5;
        }
        ${H31Text4} {
          color: ${_config.colorDarkGrey};
          font-family: ${_config.fontQuintery};
          font-size: 1.125rem;
          line-height: 1.5;
        }
        ${H31Button1} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-size: 0.8rem;
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Button2} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-size: 0.875rem;
          font-weight: bold;
          text-transform: uppercase;
        }
      `}
    />
    <H31MainNavbarSplitActions
      topBarColor={_config.colorPrimary}
      bottomBarColor={_config.colorSecondary}
      TitleComponent={
        <H31Title1A
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
        </H31Title1A>
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
              colorHover={_config.colorTertiary}
            />
          ))}
        />
      }
      TextComponent={<H31Text2>Don&apos;t Go It Alone</H31Text2>}
      ButtonComponentTop={
        <H31ButtonHollow
          buttonColor={_config.colorWhite}
          hoverColor={_config.colorTertiary}
          ButtonComponent={<H31Button1>Member Log In</H31Button1>}
        />
      }
      ButtonComponentBottom={
        <H31ButtonBright
          borderColor={_config.colorWhite}
          backgroundColor={_config.colorTertiary}
          ButtonComponent={<H31Button2>Join Now</H31Button2>}
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
