import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 690px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  background: #164f4b;
`;

const ImgContainer = styled.div``;

const ContentBlock2 = ({ TitleComponent, children }) => (
  <Container>
    <TitleContainer>{TitleComponent}</TitleContainer>
    {children}
    <ImgContainer />
    {children}
  </Container>
);

ContentBlock2.defaultProps = {
  TitleComponent: <h3>Title Test</h3>,
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
  )
};

ContentBlock2.propTypes = {
  TitleComponent: PropTypes.element,
  children: PropTypes.element
};

export default ContentBlock2;
