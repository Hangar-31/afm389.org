import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";

const Container = styled.section`
  position: relative;
  display: flex;
  border-box: content;
  height: 500px;
  width: 100%;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    outline-fit: cover;
  }
`;

const ContainerContent = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const WrapperContent = styled.section`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
`;

const Masthead1 = ({
  textRight,
  ImageComponent,
  TitleComponent,
  ParagraphComponent
}) => (
  <Container>
    <BackgroundImage>{ImageComponent}</BackgroundImage>
    {!textRight && (
      <ContainerContent>
        <WrapperContent>
          {TitleComponent}
          {ParagraphComponent}
        </WrapperContent>
      </ContainerContent>
    )}

    {textRight && (
      <ContainerContent>
        <WrapperContent>
          {TitleComponent}
          {ParagraphComponent}
        </WrapperContent>
      </ContainerContent>
    )}
  </Container>
);

Masthead1.defaultProps = {
  ImageComponent: <span>Put an image here</span>,
  TitleComponent: <span>Put an image here</span>,
  ParagraphComponent: <span>Test Title</span>,
  textRight: false
};

Masthead1.propTypes = {
  ParagraphComponent: PropTypes.element,
  TitleComponent: PropTypes.element,
  ImageComponent: PropTypes.element,
  textRight: PropTypes.bool
};

export default Masthead1;
