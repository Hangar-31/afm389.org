import React from "react";
import { PropTypes } from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31SocialIcons,
  H31LinkTallUnderline,
  H31Title4C,
  H31Title2B,
  H31Form1,
  H31Sitemap1
} from "..";

// Config
import _config from "../../_config";

const BackgroundImage = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const MainFooter1 = ({ topBarColor, bottomBarColor, ImageComponent }) => (
  <>
    <H31LayoutContainer
      css={css`
        position: relative;
        padding: 90px 0 !important;
      `}
      fluid
      as="section"
    >
      <BackgroundImage>{ImageComponent}</BackgroundImage>

      <H31LayoutRow
        css={css`
          padding: 30px 0 60px 0;
          background: rgba(0, 0, 0, 0.4);
        `}
      >
        <H31LayoutCol md={2} />

        <H31LayoutCol
          md={8}
          css={css`
            margin-bottom: 30px;
          `}
        >
          <H31Title2B
            css={css`
              color: #ffffff;
            `}
          >
            Get In Touch
          </H31Title2B>
        </H31LayoutCol>

        <H31LayoutCol md={2} />
        <H31LayoutCol md={2} />
        <H31LayoutCol md={8}>
          <H31Form1 />
        </H31LayoutCol>
        <H31LayoutCol md={2} />
      </H31LayoutRow>

      <H31LayoutRow>
        <H31LayoutCol
          md={12}
          css={css`
            position: relative;
            padding: 60px 0 90px 0 !important;
          `}
        >
          <H31Sitemap1 />
        </H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31LayoutContainer
      fluid
      as="section"
      css={css`
        position: relative;
        padding: 0 !important;
        background: linear-gradient(
          180deg,
          ${topBarColor} 50%,
          ${bottomBarColor} 50.0001%
        );
      `}
    >
      <H31LayoutRow>
        <H31LayoutCol
          md={6}
          css={css`
            position: relative;
            display: flex;
            align-items: center;
            > div {
              margin-right: 30px;
            }
          `}
        >
          {_config.footerNav.map(link => (
            <H31LinkTallUnderline
              key="main-links-for-hangar-31"
              linkColor={_config.colorWhite}
              linkHoverColor={_config.colorSecondary}
              underlineColor={_config.colorSecondary}
              underlineHoverColor={_config.colorSecondary}
              link={link.to}
              text={link.name}
            />
          ))}
        </H31LayoutCol>

        <H31LayoutCol
          md={6}
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 75px;
          `}
        >
          {_config.socials.map(social => (
            <H31SocialIcons
              color={_config.colorWhite}
              social={social.social}
              link={social.link}
              colorHover={_config.colorTertiary}
            />
          ))}
        </H31LayoutCol>

        <H31LayoutCol
          md={12}
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 75px;
          `}
        >
          <H31Title4C
            css={css`
              cursor: initial;
            `}
          >
            CENTRAL FLORIDA MUSICIANS ASSOCIATION COPYRIGHT&nbsp;
            {new Date().getFullYear()}
          </H31Title4C>
        </H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>
  </>
);

MainFooter1.defaultProps = {
  topBarColor: "#999999",
  bottomBarColor: "#BBBBBB",
  ImageComponent: <img alt="" src="https://placeimg.com/1920/1080/any" />
};

MainFooter1.propTypes = {
  topBarColor: PropTypes.string,
  bottomBarColor: PropTypes.string,
  ImageComponent: PropTypes.element
};

export default MainFooter1;
