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
  H31Link1,
  H31Text1,
  H31Text2,
  H31LinkBarHorizontal,
  H31LinkTallUnderline,
  H31SocialBarHorizontal
} from "./h31/index";

import ImgLogo from "./images/ImgLogo";
import SocialIcons from "./h31/socials/SocialIcons";

const links = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "About Us",
    to: "/about"
  },
  {
    name: "Member Benefits",
    to: "/member-benefits"
  },
  {
    name: "News And Events",
    to: "/news-&-events"
  },
  {
    name: "Contact",
    to: "/contact"
  },
  {
    name: "Rehearsal Hall",
    to: "/rehearsal-hall"
  }
];

const socials = [
  {
    social: "facebook",
    link: ""
  },
  {
    social: "instagram",
    link: ""
  },
  {
    social: "twitter",
    link: ""
  }
];

const colorDarkGreen = "#164F4B";
const colorLightGreen = "#6DA55F";
const colorOrange = "#F39508";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
        }
        .main-link-active {
          color: ${colorDarkGreen} !important;
        }
        .main-link-active + div {
          width: 100%;
          background-color: ${colorDarkGreen};
        }
        ${H31Title1} {
          color: #ffffff;
          font-family: Sarpanch;
          font-weight: 300;
          text-transform: uppercase;
        }
        ${H31Link1} {
          color: #ffffff;
          font-family: Roboto Slab;
          font-size: 0.8rem;
          text-transform: uppercase;
        }
        ${H31Text1} {
          color: #ffffff;
          font-family: Roboto Slab;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 0.8rem;
        }
        ${H31Text2} {
          color: #ffffff;
          font-family: Roboto Slab;
          font-size: 1.25rem;
        }
      `}
    />
    <H31MainNavbarSplitActions
      topBarColor={colorLightGreen}
      bottomBarColor={colorDarkGreen}
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
          linkComponents={links.map(link => (
            <H31LinkTallUnderline
              key="main-links-for-hangar-31"
              linkColor="#ffffff"
              linkHoverColor={colorDarkGreen}
              underlineColor={colorDarkGreen}
              underlineHoverColor={colorDarkGreen}
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
          socialComponents={socials.map(social => (
            <SocialIcons
              color="#ffffff"
              social={social.social}
              link={social.link}
            />
          ))}
        />
      }
      TextComponent={<H31Text2>Don&apos;t Go It Alone</H31Text2>}
      ButtonComponentTop={
        <H31ButtonHollow
          buttonColor="#ffffff"
          hoverColor={colorOrange}
          TextComponent={<H31Text1>Member Log In</H31Text1>}
        />
      }
      ButtonComponentBottom={
        <H31ButtonBright
          borderColor="#ffffff"
          backgroundColor={colorOrange}
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
