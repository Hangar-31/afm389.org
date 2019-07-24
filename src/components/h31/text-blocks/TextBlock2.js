import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Block = styled.section`
  height: 180px;
  width: 170px;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 30px 20px;
`;

const Titles = styled.section`
  align-items: center;
  padding-bottom: 10px;
`;

const TextBlock2 = ({
  TitleComponent,
  SubTitleComponent,
  TextComponent,
  lineColor,
  backgroundColor
}) => (
  <Container
    css={css`
      border: 1px solid ${lineColor};
    `}
  >
    <Block
      css={css`
        background-color: ${backgroundColor};
      `}
    />

    <ContentWrapper>
      <Titles>
        {SubTitleComponent}
        {TitleComponent}
      </Titles>

      {TextComponent}
    </ContentWrapper>
  </Container>
);

TextBlock2.defaultProps = {
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
  TitleComponent: <h2>Test</h2>,
  SubTitleComponent: <h4>Test</h4>,
  lineColor: "grey",
  backgroundColor: "black"
};

TextBlock2.propTypes = {
  TitleComponent: PropTypes.element,
  SubTitleComponent: PropTypes.element,
  TextComponent: PropTypes.element,
  lineColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default TextBlock2;
