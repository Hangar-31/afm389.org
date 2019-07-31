import React from "react";
import { PropTypes } from "prop-types";
// import { css } from "@emotion/core";

// Images
import ImgAbout1 from "../../images/_about/ImgAbout1";
import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31TitleWithBackground
} from "..";
import _config from "../../_config";

const ContentBlock2 = ({ title, children }) => (
  <H31LayoutContainer fluid as="section">
    <H31LayoutRow>
      <H31LayoutCol md={3} />
      <H31LayoutCol md={6}>
        <H31TitleWithBackground
          backgroundColor={_config.colorSecondary}
          title={title}
        />
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
