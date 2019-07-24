import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

const BigContainer = styled.section`
  display: flex;
  padding: 20px;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 25px;
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: start;
  padding: 20px 0px;
`;

const Testimonials = ({
  TitleComponent,
  TextComponent,
  fontColor,
  titleColor,
  borderColor
}) => (
  <BigContainer
    css={css`
      border-top: ${borderColor};
      border-bottom: ${borderColor};
    `}
  >
    <Container>
      <TitleContainer
        css={css`
          background-color: ${titleColor};
        `}
      >
        {TitleComponent}
      </TitleContainer>
      <ParagraphContainer
        css={css`
          color: ${fontColor};
        `}
      >
        {TextComponent}
      </ParagraphContainer>
    </Container>
  </BigContainer>
);

Testimonials.defaultProps = {
  TitleComponent: <h2>Test</h2>,
  TextComponent: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium mi a
      quam molestie, vel ultricies libero faucibus. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Ut pretium mi a quam molestie, vel ultricies
      libero faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut pretium mi a quam molestie, vel ultricies libero faucibus. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Ut pretium mi a quam
      molestie, vel ultricies libero faucibus. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Ut pretium mi a quam molestie, vel ultricies
      libero faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut pretium mi a quam molestie, vel ultricies libero faucibus. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit.
    </p>
  ),
  fontColor: "#303030",
  titleColor: "#808080",
  borderColor: "1px solid #D3D3D3"
};

Testimonials.propTypes = {
  TitleComponent: PropTypes.element,
  TextComponent: PropTypes.element,
  fontColor: PropTypes.string,
  titleColor: PropTypes.string,
  borderColor: PropTypes.string
};

export default Testimonials;
