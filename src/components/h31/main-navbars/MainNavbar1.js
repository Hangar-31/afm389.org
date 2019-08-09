/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import MediaQuery from 'react-responsive';


// Config
import _config from "../../_config";

// Components
import {
  H31SocialIcons,
  H31LinkTallUnderline,
  H31Title1A,
  H31Text2,
  H31Link6,
  H31Link5,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31MobileNav1
} from "..";

// Images
import ImgLogo from "../../images/logos/ImgLogo";

// Styled Components
const WrapperLogo = styled(Link)`
  z-index: 1;
  position: absolute;
  top: 15px;
  left: 15px;
  width: 115px;
  height: 115px;
  img {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 1200px) {
    width: 90px;
    height: 90px;
  }
  @media(max-width: 1100px) {
    width: 75px;
    height: 75px;
  }
  @media(max-width: 992px) {
    width: 57px;
    height: 57px;
    top: 5px;
  }
`;

const MainNavbarSplitActions = ({
  topBarColor,
  bottomBarColor
}) => (
  <>
    <H31LayoutContainer
      fluid
      as="section"
      css={css`
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        background: linear-gradient(
          180deg,
          ${topBarColor} 50%,
          ${bottomBarColor} 50.0001%
        );
        @media(max-width: 992px) {
          background: linear-gradient(
            180deg,
            ${topBarColor} 53px,
            ${bottomBarColor} 15px
          );
        }
      `}
    >
      <H31LayoutRow css={css`
        height: 75px;
        @media(max-width: 1200px) {
          height: 60px;
        }
        @media(max-width: 1100px) {
          height: 53px;
        }
      `}
      >
        <MediaQuery query="(min-width: 721px)">
          <H31LayoutCol
            xs={4}
            lg={3}
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <WrapperLogo to="/"><ImgLogo /></WrapperLogo>
            
            <H31Title1A
              as={Link}
              to="/"
              css={css`
                position: relative;
                margin-left: 145px;
                text-align: center;
                &:hover {
                  color: ${_config.colorWhite};
                  text-decoration: none;
                }
                @media(max-width: 1370px) {
                  width: 100%;
                  margin-left: 130px;
                }
                @media(max-width: 1200px) {
                  width: 100%;
                  margin-left: 105px;
                }
                @media(max-width: 1100px) {
                  width: 100%;
                  margin-left: 90px;
                }
                @media(max-width: 992px) {
                  width: 120px;
                  margin-left: 72px;
                }
              `}
            >
              CFMA Local 389
              <span
                css={css`
                  position: absolute;
                  font-size: 0.625rem;
                  white-space: none;
                  width: 120%;
                  left: -10%;
                  top: 25px;
                  right: 0;
                  margin: 0 auto;
                  @media(max-width: 1370px) {
                    font-size: 0.425rem;
                  }
                  @media(max-width: 1100px) {
                    font-size: 7px;
                    top: 20px;
                  }
                `}
              >
                Central FL Musicians&#x27; Association
              </span>
            </H31Title1A>
          </H31LayoutCol>
        </MediaQuery>

        <MediaQuery query="(max-width: 720px)">
          <H31LayoutCol
            xs={10}
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <WrapperLogo to="/"><ImgLogo /></WrapperLogo>
            
            <H31Title1A
              as={Link}
              to="/"
              css={css`
                position: relative;
                text-align: center;
                width: 120px;
                margin-left: 72px;
                &:hover {
                  color: ${_config.colorWhite};
                  text-decoration: none;
                }
              `}
            >
              CFMA Local 389
              <span
                css={css`
                  position: absolute;
                  font-size: 7px;
                  white-space: none;
                  width: 120%;
                  left: -10%;
                  top: 20px;
                  right: 0;
                  margin: 0 auto;
                `}
              >
                Central FL Musicians&#x27; Association
              </span>
            </H31Title1A>
          </H31LayoutCol>
        </MediaQuery>
          
        <MediaQuery query="(min-width: 993px)">
          <H31LayoutCol
            xs={7}
            lg={7}
            xl={6}
            css={css`
            display: flex;
            justify-content: space-between;
          `}
          >
            {_config.mainNav.map(link => (
              <H31LinkTallUnderline
                link={link.to}
                text={link.name}
                linkColor={_config.colorWhite}
                linkHoverColor={_config.colorSecondary}
                underlineColor={_config.colorSecondary}
                underlineHoverColor={_config.colorSecondary}
              />
          ))}
          </H31LayoutCol>
        
          <H31LayoutCol
            xs={3}
            lg={2}
            xl={3}
            css={css`
            display: flex;
            align-items: center;
            justify-content: flex-end;
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

            <H31Link6 
              css={css`
              margin-left: 30px; 
              @media (max-width: 1370px) {
                margin-left: 15px; 
              }
            `} 
              href="https://afmquartet.org/wp-content/plugins/afmorg/loginform.php?client_token=898909860"
            >
            Member Log In

            </H31Link6>
          </H31LayoutCol>
        </MediaQuery>

        <MediaQuery query="(max-width: 992px) and (min-width: 720px)">
          <H31LayoutCol
            xs={4}
            css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
          >
            <H31Text2 
              css={css`
              margin-right: 15px;
            `}
            >
            Don&apos;t Go It Alone
            </H31Text2>

            <H31Link5 href="https://members.afm.org/join/step1/c/en_US">Join Now</H31Link5>
          </H31LayoutCol>

          <H31LayoutCol
            xs={4}
            css={css`
            display: flex;
            align-items: center;
            justify-content: flex-end;
          `}
          >
            <H31MobileNav1 />
          </H31LayoutCol>
        </MediaQuery>

        <MediaQuery query="(max-width: 720px)">
          <H31LayoutCol
            xs={2}
            css={css`
              display: flex;
              align-items: center;
              justify-content: flex-end;
            `}
          >
            <H31MobileNav1 />
          </H31LayoutCol>
        </MediaQuery>

      </H31LayoutRow>

      <H31LayoutRow css={css`
        height: 75px;
        @media(max-width: 1200px) {
          height: 60px;
        }
        @media(max-width: 1100px) {
          height: 53px;
        }
        @media(max-width: 992px) {
          height: 15px;
        }
      `}
      >
        <MediaQuery query="(min-width: 993px)">
          <H31LayoutCol xs={3} />
          <H31LayoutCol
            css={css`
            display: flex;
            align-items: center;
          `}
          >
            <H31Text2 
              css={css`
                margin-right: 15px;
            `}
            >
            Don&apos;t Go It Alone
            </H31Text2>

            <H31Link5 href="https://members.afm.org/join/step1/c/en_US">Join Now</H31Link5>
          </H31LayoutCol>
        </MediaQuery>
      </H31LayoutRow>
    </H31LayoutContainer>

    <MediaQuery query="(max-width: 720px)">
      <H31LayoutContainer 
        fluid
        as="section"
        css={css`
          z-index: 1;
          position: absolute;
        `}
      >
        <H31LayoutRow>
          <H31LayoutCol
            xs={12}
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <H31Text2 
              css={css`
                margin-right: 15px;
              `}
            >
              Don&apos;t Go It Alone
            </H31Text2>

            <H31Link5 href="https://members.afm.org/join/step1/c/en_US">Join Now</H31Link5>
          </H31LayoutCol>
        </H31LayoutRow>
      </H31LayoutContainer>
    </MediaQuery>
  </>
);

MainNavbarSplitActions.defaultProps = {
  topBarColor: "#999999",
  bottomBarColor: "#BBBBBB",
};

MainNavbarSplitActions.propTypes = {
  topBarColor: PropTypes.string,
  bottomBarColor: PropTypes.string,
};

export default MainNavbarSplitActions;
