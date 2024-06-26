/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled/macro";

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

function ContentBlock2({ id, title, children }) {
  return (
    <Container id={id}>
      {title !== null && (
        <H31Title2C
          css={css`
            padding: 15px 0;
            margin-bottom: 15px;
            text-align: center;
            background-color: ${_config.colorSecondary};

            @media (max-width: 575px) {
              display: none !important;
            }
          `}
        >
          {title}
        </H31Title2C>
      )}
      {children}
    </Container>
  );
}

ContentBlock2.defaultProps = {
  id: null,
  title: null,
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
  ),
};

ContentBlock2.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ContentBlock2;
