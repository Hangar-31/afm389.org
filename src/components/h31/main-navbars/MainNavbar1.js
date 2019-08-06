/* eslint-disable prettier/prettier */
import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

// Config
import _config from "../../_config";

// Components
import {
  H31SocialBarHorizontal,
  H31SocialIcons,
  H31LinkBarHorizontal,
  H31LinkTallUnderline,
  H31Link1,
  H31Title1A,
  H31Text2,
  H31Link6,
  H31Link5
} from "..";

// Images
import ImgLogo from "../../images/logos/ImgLogo";

// Styled Components
const Container = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 150px;
  padding: 0 15px;
`;

const ContainerNav = styled.nav`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  height: 50%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const ContainerAction = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  height: 50%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const WrapperLogo = styled.div`
  z-index: 1;
  position: absolute;
  top: 15px;
  width: 115px;
  height: 115px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Space = styled.div`
  width: 15px;
`;

const logoWidth = 115;

const LogoSpace = styled.div`
  width: ${logoWidth + 30}px;
`;

const MainNavbarSplitActions = ({
  topBarColor,
  bottomBarColor
}) => (
  <Container
    css={css`
      background: linear-gradient(
        180deg,
        ${topBarColor} 50%,
        ${bottomBarColor} 50.0001%
      );
    `}
  >
    <ContainerNav>
      <Group>
        <WrapperLogo><ImgLogo /></WrapperLogo>
        
        <LogoSpace />

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

        <Space />
        <Space />

        <H31LinkBarHorizontal
          linkComponents={_config.mainNav.map(link => (
            <H31LinkTallUnderline
              key="main-links-for-hangar-31"
              linkColor={_config.colorWhite}
              linkHoverColor={_config.colorSecondary}
              underlineColor={_config.colorSecondary}
              underlineHoverColor={_config.colorSecondary}
              LinkComponent={(
                <H31Link1 activeClassName="main-link-active" to={link.to}>
                  {link.name}
                </H31Link1>
              )}
            />
          ))}
        />
      </Group>

      <Group>
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

        <Space />

        <H31Link6 href="https://afmquartet.org/wp-content/plugins/afmorg/loginform.php?client_token=898909860">Member Log In</H31Link6>
      </Group>
    </ContainerNav>

    <ContainerAction>
      <H31Text2>Don&apos;t Go It Alone</H31Text2>

      <Space />

      <H31Link5 href="https://members.afm.org/join/step1/c/en_US">Join Now</H31Link5>
    </ContainerAction>
  </Container>
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
