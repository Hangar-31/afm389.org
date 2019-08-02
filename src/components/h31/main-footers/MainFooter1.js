import React from "react";
import { PropTypes } from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { H31LayoutContainer, H31LayoutRow, H31LayoutCol } from "..";

// const Container = styled.section`
//   position: relative;
//   box-sizing: border-box;
//   display: flex;
//   flex-wrap: wrap;
//   width: 100%;
// `;

// const WrapperTop = styled.section`
//   width: 100%;
// `;

const BackgroundImage = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

// const FormContainer = styled.section`
// width: 100%;
// max-width: 1440px;
// margin: 120px auto 60px auto;
// padding: 60px 0 120px 0;
// background: rgba(0, 0, 0, 0.4);
// `;

// const FormWrapper = styled.div`
//   max-width: 900px;
//   margin: 0 auto;
// `;

// const TitleContainer = styled.div`
//   margin-bottom: 60px;
// `;

// const SitemapContainer = styled.section`
//   margin: 0 auto 120px auto;
//   max-width: 1440px;
// `;

// const WrapperBottom = styled.section`
//   height: 150px;
//   width: 100%;
// `;

// const TopBar = styled.nav`
//   position: relative;
//   box-sizing: border-box;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;

//   height: 50%;
//   width: 100%;
//   max-width: 1440px;
//   margin: 0 auto;
// `;

// const BottomBar = styled.section`
// position: relative;
// box-sizing: border-box;
// display: flex;
// justify-content: center;
// align-items: center;

//   height: 50%;
//   width: 100%;
//   max-width: 1440px;
//   margin: 0 auto;
// `;

const MainFooter1 = ({
  topBarColor,
  bottomBarColor,
  ImageComponent,
  TitleComponent,
  FormComponent,
  SitemapComponent,
  LinkBarComponent,
  SocialBarComponent,
  CopyrightComponent
}) => (
  <>
    <H31LayoutContainer fluid as="section">
      <BackgroundImage>{ImageComponent}</BackgroundImage>

      <H31LayoutRow
        css={css`
          padding: 60px 0 120px 0;
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
          {TitleComponent}
        </H31LayoutCol>
        <H31LayoutCol md={2} />
        <H31LayoutCol md={2} />
        <H31LayoutCol md={8}>{FormComponent}</H31LayoutCol>
        <H31LayoutCol md={2} />
      </H31LayoutRow>

      <H31LayoutRow>
        <H31LayoutCol md={12}>{SitemapComponent}</H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>
    <H31LayoutContainer>
      <H31LayoutRow
        css={css`
          background: linear-gradient(
            180deg,
            ${topBarColor} 50%,
            ${bottomBarColor} 50.0001%
          );
        `}
      >
        <H31LayoutCol
          md={6}
          css={css`
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 80px;
          `}
        >
          {LinkBarComponent}
        </H31LayoutCol>
        <H31LayoutCol
          md={6}
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 80px;
          `}
        >
          {SocialBarComponent}
        </H31LayoutCol>
        <H31LayoutCol
          md={12}
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
          `}
        >
          {CopyrightComponent}
        </H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>
  </>
);

MainFooter1.defaultProps = {
  topBarColor: "#999999",
  bottomBarColor: "#BBBBBB",
  ImageComponent: <img alt="" src="https://placeimg.com/1920/1080/any" />,
  TitleComponent: <h2>Button</h2>,
  FormComponent: <form />,
  SitemapComponent: <span>Sitemap</span>,
  LinkBarComponent: <span>LinkBar</span>,
  SocialBarComponent: <span>SocialBar</span>,
  CopyrightComponent: <span>Copyright</span>
};

MainFooter1.propTypes = {
  topBarColor: PropTypes.string,
  bottomBarColor: PropTypes.string,
  ImageComponent: PropTypes.element,
  TitleComponent: PropTypes.element,
  FormComponent: PropTypes.element,
  SitemapComponent: PropTypes.element,
  LinkBarComponent: PropTypes.element,
  SocialBarComponent: PropTypes.element,
  CopyrightComponent: PropTypes.element
};

export default MainFooter1;
