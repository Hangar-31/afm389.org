import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 60px auto;
`;

const Block = styled.section`
  width: 90px;
  margin-right: 100px;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
  max-width: 70%;
`;

const TitleWrapper = styled.section`
  align-items: center;
  margin-bottom: 30px;
`;

const TextBlock2 = ({
  TitleComponent,
  SubTitleComponent,
  TextComponent,
  backgroundColor
}) => (
  <Container>
    <Block
      css={css`
        background-color: ${backgroundColor};
      `}
    />

    <ContentWrapper>
      <TitleWrapper>
        {SubTitleComponent}
        {TitleComponent}
      </TitleWrapper>

      {TextComponent}
    </ContentWrapper>
  </Container>
);

TextBlock2.defaultProps = {
  TitleComponent: <h2>Test</h2>,
  SubTitleComponent: <h4>Test</h4>,
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
      libero faucibus.
    </p>
  ),
  backgroundColor: "black"
};

TextBlock2.propTypes = {
  TitleComponent: PropTypes.element,
  SubTitleComponent: PropTypes.element,
  TextComponent: PropTypes.element,
  backgroundColor: PropTypes.string
};

export default TextBlock2;
