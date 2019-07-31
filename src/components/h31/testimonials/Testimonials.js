import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { H31Title3A, H31Text4 } from "..";

const Container = styled.section`
  display: flex;
  padding: 20px;
  margin-bottom: 60px;
`;

const Wrapper = styled.section`
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

const Testimonials = ({ title, text, fontColor, titleColor, borderColor }) => (
  <Container
    css={css`
      border-top: ${borderColor};
      border-bottom: ${borderColor};
    `}
  >
    <Wrapper>
      <TitleContainer
        css={css`
          background-color: ${titleColor};
        `}
      >
        <H31Title3A>{title}</H31Title3A>
      </TitleContainer>
      <ParagraphContainer
        css={css`
          color: ${fontColor};
        `}
      >
        <H31Text4>{text}</H31Text4>
      </ParagraphContainer>
    </Wrapper>
  </Container>
);

Testimonials.defaultProps = {
  title: <h2>Test</h2>,
  text: (
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
  title: PropTypes.element,
  text: PropTypes.element,
  fontColor: PropTypes.string,
  titleColor: PropTypes.string,
  borderColor: PropTypes.string
};

export default Testimonials;
