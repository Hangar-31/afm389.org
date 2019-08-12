import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

// Components
import {
  H31Title2C,
  H31Text3,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol
} from "..";

// Styled Components
const TitleWrapper = styled.div`
  margin-bottom: 30px;
  @media (max-width: 575px) {
    margin-bottom: 15px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .gatsby-image-wrapper {
    width: 600px;
  }
  @media (max-width: 575px) {
    height: 180px;
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

const ContentBlock = ({
  ImageComponent,
  title,
  text,
  titleColor,
  backgroundColor,
  textRight
}) => (
  <H31LayoutContainer
    fluid
    as="section"
    css={css`
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      margin-bottom: 90px;
      background-color: ${backgroundColor};
    `}
  >
    <H31LayoutRow>
      <H31LayoutCol
        xs={textRight ? { span: 1, order: 2 } : 1}
        lg={textRight ? { span: 1, order: 2 } : { span: 1, order: 1 }}
      />

      <H31LayoutCol
        xs={textRight ? { span: 6, order: 2 } : 6}
        lg={textRight ? { span: 4, order: 3 } : { span: 4, order: 2 }}
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <TitleWrapper>
          <H31Title2C
            css={css`
              color: ${titleColor};
              text-align: ${textRight ? "center" : "left"};
              @media (max-width: 991px) {
                font-size: 2rem;
              }
              @media (max-width: 767px) {
                font-size: 1.25rem;
              }
              @media (max-width: 575px) {
                font-size: 0.875rem;
              }
            `}
          >
            {title}
          </H31Title2C>
        </TitleWrapper>

        <H31Text3
          css={css`
            margin-bottom: 0;
          `}
        >
          {text}
        </H31Text3>
      </H31LayoutCol>

      <H31LayoutCol
        xs={textRight ? { span: 4, order: 1 } : 4}
        lg={textRight ? { span: 6, order: 1 } : { span: 6, order: 4 }}
      >
        <ImageWrapper>{ImageComponent}</ImageWrapper>
      </H31LayoutCol>

      <H31LayoutCol
        xs={textRight ? { span: 1, order: 3 } : 1}
        lg={textRight ? { span: 1, order: 4 } : { span: 1, order: 3 }}
      />
    </H31LayoutRow>
  </H31LayoutContainer>
);

ContentBlock.defaultProps = {
  title: "Title",
  text: `
  Sed ac neque ac sem iaculis commodo. Aenean accumsan in neque non tempus.
  Aenean euismod metus leo, at euismod libero pharetra eu. Cras ultrices
  imperdiet tortor. Sed mollis eros id arcu auctor, sit amet posuere arcu
  facilisis. Aliquam et euismod neque, in rhoncus lectus. Suspendisse dictum
  vitae massa sed lacinia. Aliquam et euismod neque, in rhoncus lectus.
  Suspendisse dictum vitae massa sed lacinia.
  `,
  ImageComponent: <img alt="" src="https://via.placeholder.com/1200x1200" />,
  titleColor: "#000000",
  backgroundColor: "transparent",
  textRight: false
};

ContentBlock.propTypes = {
  ImageComponent: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string,
  titleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textRight: PropTypes.bool
};

export default ContentBlock;
