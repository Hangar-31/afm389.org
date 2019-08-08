import React from "react";
import { PropTypes } from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Config
import _config from "../../_config";

// Components
import { H31Title2C } from "..";

// Images
import ImgAbout1 from "../../images/_about/ImgAbout1";

const Container = styled.section`
  .gatsby-image-wrapper {
    width: 100% !important;
  }
  overflow: hidden;
`;

const ContentBlock2 = ({ title, children }) => (
  <Container>
    <H31Title2C
      css={css`
        padding: 15px 0;
        margin-bottom: 15px;
        text-align: center;
        background-color: ${_config.colorSecondary};
      `}
    >
      {title}
    </H31Title2C>
    {children}
  </Container>
);

ContentBlock2.defaultProps = {
  title: "Test Title",
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