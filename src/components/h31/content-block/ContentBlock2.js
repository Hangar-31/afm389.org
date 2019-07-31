import React from "react";
import { PropTypes } from "prop-types";
import { css } from "@emotion/core";

// Images
import ImgAbout1 from "../../images/_about/ImgAbout1";
import { H31LayoutContainer, H31LayoutRow, H31LayoutCol, H31Title2C } from "..";
import _config from "../../_config";

const ContentBlock2 = ({ title, children }) => (
  <H31LayoutContainer
    css={css`
      margin: 60px 0;
    `}
    fluid
    as="section"
  >
    <H31LayoutRow>
      <H31LayoutCol md={3} />
      <H31LayoutCol
        md={6}
        css={css`
          .gatsby-image-wrapper {
            width: 100% !important;
          }
          overflow: hidden;
        `}
      >
        <H31Title2C
          css={css`
            padding: 15px 0;
            text-align: center;
            background-color: ${_config.colorSecondary};
          `}
        >
          {title}
        </H31Title2C>
        {children}
      </H31LayoutCol>
      <H31LayoutCol md={3} />
    </H31LayoutRow>
  </H31LayoutContainer>
);

ContentBlock2.defaultProps = {
  title: <h3>Title Test</h3>,
  children: (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
      <ImgAbout1 />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </>
  )
};

ContentBlock2.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
};

export default ContentBlock2;
