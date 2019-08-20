/* eslint-disable no-underscore-dangle */
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
  H31Link2,
  H31Title4B
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

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr;
  grid-gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
`;

const List = styled.ul`
  grid-column: 1fr;
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 15px;
  line-height: 1.25;
  @media (max-width: 1199px) {
    line-height: 1;
    font-size: 0.775rem;
  }
`;

const LinkExternal = styled.a`
  ${H31Link2.__emotion_styles}
`;

const MainFooter1 = ({ topBarColor, bottomBarColor, ImageComponent }) => (
  <>
    <H31LayoutContainer
      css={css`
        position: relative;
        padding: 90px 0 !important;
        @media (max-width: 767px) {
          padding: 30px 15px !important;
        }
        @media (max-width: 575px) {
          padding: 15px !important;
        }
      `}
      fluid
      as="section"
    >
      <BackgroundImage>{ImageComponent}</BackgroundImage>

      <H31LayoutRow
        css={css`
          margin-bottom: 60px;
          padding: 30px 0 60px 0;
          background: rgba(0, 0, 0, 0.4);
          @media (max-width: 767px) {
            margin-bottom: 0;
            padding: 30px 0 0 0;
          }
        `}
      >
        <H31LayoutCol className="d-none d-xs-none d-lg-block" xs={1} lg={2} />
        <H31LayoutCol
          className=""
          xs={10}
          lg={8}
          css={css`
            margin-bottom: 30px;
          `}
        >
          <H31Title2B
            css={css`
              color: #ffffff;
              font-size: 1.5rem !important;
            `}
          >
            Get In Touch
          </H31Title2B>
        </H31LayoutCol>
        <H31LayoutCol className="d-none d-xs-none d-lg-block" xs={1} lg={2} />

        <H31LayoutCol className="d-xs-none d-md-block" md={1} lg={2} />
        <H31LayoutCol
          css={css`
            @media (max-width: 767px) {
              padding: 0 !important;
            }
          `}
          xs={12}
          lg={8}
        >
          <H31Form1 />
        </H31LayoutCol>
        <H31LayoutCol className="d-xs-none d-md-block" md={1} lg={2} />
      </H31LayoutRow>

      <H31LayoutRow
        css={css`
          border-top: 1px solid #ffffff;
          border-bottom: 1px solid #ffffff;
          @media (max-width: 767px) {
            display: none !important;
          }
        `}
      >
        <H31LayoutCol className="d-none d-lg-block" xl={1} />
        <H31LayoutCol xs={12} xl={10}>
          <Wrapper>
            {_config.sitemapNav.map(item => (
              <List key={item.title}>
                <Item>
                  <H31Title4B>{item.title}</H31Title4B>
                </Item>
                {item.links.map(link => (
                  <Item key={link.name}>
                    {link.external && (
                      <LinkExternal href={link.to}>{link.name}</LinkExternal>
                    )}
                    {!link.external && (
                      <H31Link2 to={link.to}>{link.name}</H31Link2>
                    )}
                  </Item>
                ))}
              </List>
            ))}
          </Wrapper>
        </H31LayoutCol>
        <H31LayoutCol className="d-none d-lg-block" xl={1} />
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
          className="d-none d-xs-none d-sm-block"
          sm={8}
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
          xs={12}
          sm={4}
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 75px;
            @media (max-width: 575px) {
              justify-content: center;
            }
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
