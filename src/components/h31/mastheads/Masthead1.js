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
  H31Title1B,
  H31Text2
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
  <>
    <H31LayoutContainer
      css={css`
        position: relative;
        height: 600px;
        padding-top: 0 !important;
        @media (max-width: 1440px) {
          height: 525px;
        }
        @media (max-width: 1199px) {
          height: 500px;
        }
        @media (max-width: 991px) {
          height: 450px;
        }
        @media (max-width: 767px) {
          height: 300px;
        }
        @media (max-width: 575px) {
          height: 190px;
        }
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
          @media (max-width: 767px) {
            display: none !important;
          }
        `}
      >
        <H31LayoutCol xs={8} lg={7}>
          <H31Title1B
            css={css`
              margin-bottom: 15px;
              text-align: center;
              background-color: ${_config.colorPrimary};
            `}
          >
            {title}
          </H31Title1B>
          {text !== "" && <H31Paragraph1 text={text} />}
        </H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31LayoutContainer
      css={css`
        padding: 0 !important;
        display: none;
        @media (max-width: 768px) {
          display: block;
        }
      `}
      fluid
      as="section"
    >
      <H31LayoutRow
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 15px 0;
          background-color: ${_config.colorPrimary};
        `}
      >
        <H31LayoutCol xs={1} md={0} />
        <H31LayoutCol xs={10} md={12}>
          <H31Title1B
            css={css`
              text-align: center;
              background-color: ${_config.colorPrimary};
            `}
          >
            {title}
          </H31Title1B>
        </H31LayoutCol>
        <H31LayoutCol xs={1} md={0} />
      </H31LayoutRow>

      {text === "" && <br />}
      {text !== "" && (
        <H31LayoutRow
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            padding: 30px 0;
          `}
        >
          <H31LayoutCol xs={1} md={0} />
          <H31LayoutCol xs={10} md={12}>
            <H31Text2
              css={css`
                color: ${_config.colorDarkGrey};
              `}
            >
              {text}
            </H31Text2>
          </H31LayoutCol>
          <H31LayoutCol xs={1} md={0} />
        </H31LayoutRow>
      )}
    </H31LayoutContainer>
  </>
);

Masthead1.defaultProps = {
  ImageComponent: <span>Put an image here</span>,
  title: "Title",
  text: ""
};

Masthead1.propTypes = {
  ImageComponent: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Masthead1;
