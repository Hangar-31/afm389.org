import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  height: 150px;
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
  bottomBarColor,
  LogoComponent,
  TitleComponent,
  LinkBarComponent,
  SocialBarComponent,
  ButtonComponentTop,
  TextComponent,
  ButtonComponentBottom
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
        <WrapperLogo>{LogoComponent}</WrapperLogo>
        <LogoSpace />
        {TitleComponent}
        <Space />
        <Space />
        {LinkBarComponent}
      </Group>
      <Group>
        {SocialBarComponent}
        <Space />
        {ButtonComponentTop}
      </Group>
    </ContainerNav>
    <ContainerAction>
      {TextComponent}
      <Space />
      {ButtonComponentBottom}
    </ContainerAction>
  </Container>
);

MainNavbarSplitActions.defaultProps = {
  topBarColor: "#999999",
  bottomBarColor: "#BBBBBB",
  LogoComponent: <span>Logo</span>,
  TitleComponent: <span>Title</span>,
  LinkBarComponent: <span>LinkBar</span>,
  SocialBarComponent: <span>SocialBar</span>,
  ButtonComponentTop: <span>Button</span>,
  TextComponent: <span>Text</span>,
  ButtonComponentBottom: <span>Button</span>
};

MainNavbarSplitActions.propTypes = {
  topBarColor: PropTypes.string,
  bottomBarColor: PropTypes.string,
  LogoComponent: PropTypes.element,
  TitleComponent: PropTypes.element,
  LinkBarComponent: PropTypes.element,
  SocialBarComponent: PropTypes.element,
  ButtonComponentTop: PropTypes.element,
  TextComponent: PropTypes.element,
  ButtonComponentBottom: PropTypes.element
};

export default MainNavbarSplitActions;
