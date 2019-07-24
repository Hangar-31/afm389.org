import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto 60px auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 50%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 400px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  .gatsby-image-wrapper {
    width: 600px;
  }
`;

const ContentBlock = ({
  ImageComponent,
  TitleComponent,
  TextComponent,
  textRight,
  backgroundColor
}) => (
  <Container
    css={css`
      background-color: ${backgroundColor};
    `}
  >
    <Wrapper>
      {!textRight && (
        <>
          <ContentContainer>
            <ContentWrapper>
              <TitleWrapper>{TitleComponent}</TitleWrapper>

              {TextComponent}
            </ContentWrapper>
          </ContentContainer>
          <ImageWrapper>{ImageComponent}</ImageWrapper>
        </>
      )}

      {textRight && (
        <>
          <ImageWrapper>{ImageComponent}</ImageWrapper>
          <ContentContainer>
            <ContentWrapper>
              <TitleWrapper
                css={css`
                  text-align: center;
                `}
              >
                {TitleComponent}
              </TitleWrapper>

              {TextComponent}
            </ContentWrapper>
          </ContentContainer>
        </>
      )}
    </Wrapper>
  </Container>
);

ContentBlock.defaultProps = {
  textRight: false,
  backgroundColor: "transparent",
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
  backgroundColor: PropTypes.string,
  TitleComponent: PropTypes.element,
  TextComponent: PropTypes.element,
  ImageComponent: PropTypes.element
};

export default ContentBlock;
