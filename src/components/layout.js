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
  H31ButtonBright,
  H31ButtonHollow,
  H31Button1,
  H31Button2,
  H31Button3,
  H31Label1,
  H31Input1,
  H31Title1A,
  H31Title1B,
  H31Title1C,
  H31Title2A,
  H31Title2B,
  H31Title2C,
  H31Title3A,
  H31Title3B,
  H31Title4A,
  H31Title4B,
  H31Title4C,
  H31Link1,
  H31Link2,
  H31Link3,
  H31Link4,
  H31Text1,
  H31Text2,
  H31Text3,
  H31Text4,
  H31LinkBarHorizontal,
  H31LinkTallUnderline,
  H31SocialBarHorizontal,
  H31MainFooter1,
  H31Form1,
  H31SocialIcons,
  H31Sitemap1
} from "./h31/index";

// Images
import ImgLogo from "./images/logos/ImgLogo";
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
        ${H31Input1} {
          border-radius: 5px;
          border: none;
        }
        ${H31Label1} {
          color: ${_config.colorLightGrey};
          font-family: ${_config.fontPrimary};
          font-weight: 300;
        }
        ${H31Title1A} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontSecondary};
          font-size: 1.5rem;
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
        ${H31Title1C} {
          color: ${_config.colorWhite};
          font-size: 3.75rem;
          font-family: ${_config.fontTertiary};
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Title2A} {
          color: ${_config.colorWhite};
          font-size: 4.25rem;
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
          color: ${_config.colorWhite};
          font-size: 2.5rem;
          font-family: ${_config.fontTertiary};
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Title3A} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-weight: bold;
          font-size: 1.25rem;
        }
        ${H31Title3B} {
          color: ${_config.colorDarkGrey};
          font-family: ${_config.fontPrimary};
          font-weight: bold;
          font-size: 0.925rem;
          text-decoration: underline;
        }
        ${H31Title4A} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-weight: 300;
          font-size: 1.125rem;
          text-decoration: underline;
        }
        ${H31Title4B} {
          color: ${_config.colorTertiary};
          font-family: ${_config.fontPrimary};
          font-weight: 300;
          font-size: 0.875rem;
        }
        ${H31Title4C} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-size: 0.8rem;
        }
        ${H31Link1} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-size: 0.8rem;
          text-transform: uppercase;
          &:hover {
            text-decoration: none;
          }
        }
        ${H31Link2} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-size: 0.8rem;
          &:hover {
            text-decoration: none;
          }
        }
        ${H31Link3} {
          color: ${_config.colorTertiary};
          font-family: ${_config.fontPrimary};
          font-size: 0.8rem;
          &:hover {
            text-decoration: none;
          }
        }
        ${H31Link4} {
          color: ${_config.colorGrey};
          font-family: ${_config.fontPrimary};
          font-size: 0.8rem;
          &:hover {
            text-decoration: none;
          }
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
        ${H31Button3} {
          color: ${_config.colorWhite};
          font-family: ${_config.fontPrimary};
          font-size: 0.875rem;
          font-weight: bold;
          text-transform: uppercase;
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
            <H31SocialIcons
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
