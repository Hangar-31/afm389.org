/* eslint-disable prettier/prettier */
import { Link } from "gatsby";
import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

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
  H31LayoutCol
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
`;

const MainNavbarSplitActions = ({
  topBarColor,
  bottomBarColor
}) => (
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
    `}
  >
    <H31LayoutRow css={css`
      height: 75px;
    `}
    >
      <H31LayoutCol
        md={3}
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
            `}
          >
            Central FL Musicians&#x27; Association
          </span>
        </H31Title1A>
      </H31LayoutCol>

      <H31LayoutCol
        md={6}
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
        md={3}
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

        <H31Link6 css={css`margin-left: 30px;`} href="https://afmquartet.org/wp-content/plugins/afmorg/loginform.php?client_token=898909860">Member Log In</H31Link6>
      </H31LayoutCol>
    </H31LayoutRow>

    <H31LayoutRow css={css`
      height: 75px;
    `}
    >
      <H31LayoutCol md={3} />
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
    </H31LayoutRow>
  </H31LayoutContainer>
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
