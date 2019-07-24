import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    outline-fit: cover;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: left;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  padding: 40px 100px 20px;
`;

const ParagraphWrapper = styled.div`
  height: 100%;
  padding: 0px 100px;
  line-height: 1.5em;
`;

const ObjectWrapper = styled.div`
  padding: 30px;
`;

const ContentBlock = ({
  ImageComponent,
  TitleComponent,
  TextComponent,
  textRight
}) => (
  <Container>
    {!textRight && (
      <>
        <TextWrapper>
          <ObjectWrapper>
            <TitleWrapper>{TitleComponent}</TitleWrapper>

            <ParagraphWrapper>{TextComponent}</ParagraphWrapper>
          </ObjectWrapper>
        </TextWrapper>
        <ImageWrapper>{ImageComponent}</ImageWrapper>
      </>
    )}

    {textRight && (
      <>
        <ImageWrapper>{ImageComponent}</ImageWrapper>
        <TextWrapper>
          <ObjectWrapper>
            <TitleWrapper>{TitleComponent}</TitleWrapper>

            <ParagraphWrapper>{TextComponent}</ParagraphWrapper>
          </ObjectWrapper>
        </TextWrapper>
      </>
    )}
  </Container>
);

ContentBlock.defaultProps = {
  textRight: false,
  ImageComponent: <span>Put an image here</span>,
  TitleComponent: <span>Test Title</span>,
  TextComponent: (
    <p>
      Sed ac neque ac sem iaculis commodo. Aenean accumsan in neque non tempus.
      Aenean euismod metus leo, at euismod libero pharetra eu. Cras ultrices
      imperdiet tortor. Sed mollis eros id arcu auctor, sit amet posuere arcu
      facilisis. Aliquam et euismod neque, in rhoncus lectus. Suspendisse dictum
      vitae massa sed lacinia. Aliquam et euismod neque, in rhoncus lectus.
      Suspendisse dictum vitae massa sed lacinia.
    </p>
  )
};

ContentBlock.propTypes = {
  textRight: PropTypes.bool,
  TitleComponent: PropTypes.element,
  TextComponent: PropTypes.element,
  ImageComponent: PropTypes.element
};

export default ContentBlock;
