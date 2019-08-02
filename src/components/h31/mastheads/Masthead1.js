import React from "react";
import { PropTypes } from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Style Config File
import _config from "../../_config";

// Components
import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Paragraph1,
  H31Title1B
} from "..";

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
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
            margin-bottom: 15px;
            text-align: center;
            background-color: ${_config.colorPrimary};
          `}
        >
          {title}
        </H31Title1B>

        <H31Paragraph1 text={text} />
      </H31LayoutCol>
    </H31LayoutRow>
  </H31LayoutContainer>
);

Masthead1.defaultProps = {
  ImageComponent: <span>Put an image here</span>,
  title: "Title",
  text: "Text"
};

Masthead1.propTypes = {
  ImageComponent: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Masthead1;
