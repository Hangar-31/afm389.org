import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Paragraph1,
  H31Title1B
} from "..";
import _config from "../../_config";
// import _config from "../../_config";

// const Container = styled.section`
//   position: relative;
//   display: flex;
//   border-box: content;
//   height: 600px;
//   width: 100%;
// `;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

// const ContainerContent = styled.section`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   max-width: 1440px;
//   margin: 0 auto;
// `;

// const WrapperContent = styled.section`
//   position: absolute;
//   bottom: 30px;
//   left: 0;
//   max-width: 700px;
// `;

const Spacer = styled.div`
  width: 15px;
  height: 15px;
`;

const Masthead1 = ({ ImageComponent, title, text }) => (
  <H31LayoutContainer
    css={css`
      position: relative;
      height: 600px;
      padding-top: 0 !important;
    `}
    as="section"
    fluid
  >
    <BackgroundImage>{ImageComponent}</BackgroundImage>
    <H31LayoutRow
      css={css`
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        height: 100%;
      `}
    >
      <H31LayoutCol md={7}>
        <H31Title1B
          css={css`
            text-align: center;
            background-color: ${_config.colorPrimary};
          `}
        >
          {title}
        </H31Title1B>
        <Spacer />
        <H31Paragraph1 text={text} />
      </H31LayoutCol>
    </H31LayoutRow>
  </H31LayoutContainer>
);

Masthead1.defaultProps = {
  ImageComponent: <span>Put an image here</span>,
  title: <span>Put an image here</span>,
  text: <span>Test Title</span>
};

Masthead1.propTypes = {
  ImageComponent: PropTypes.element,
  title: PropTypes.element,
  text: PropTypes.element
};

export default Masthead1;
