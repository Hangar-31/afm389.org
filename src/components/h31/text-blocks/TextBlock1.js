import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
`;

const TextBlock1 = ({ ParagraphComponent, backgroundColor }) => (
  <Wrapper
    css={css`
      background-color: ${backgroundColor};
    `}
  >
    {ParagraphComponent}
  </Wrapper>
);

TextBlock1.defaultProps = {
  backgroundColor: "rgba(0,0,0,0.55)",
  ParagraphComponent: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium mi a
      quam molestie, vel ultricies libero faucibus. Duis dignissim ligula quis
      auctor lacinia. Donec porttitor blandit mauris, ac laoreet diam vehicula
      in. In tortor nunc, egestas eu consectetur sed, efficitur et massa.
      Pellentesque consectetur lorem vel neque tristique fringilla. Fusce
      condimentum convallis est sed tincidunt. Cras eget velit at justo
      ullamcorper gravida.
    </p>
  )
};

TextBlock1.propTypes = {
  backgroundColor: PropTypes.string,
  ParagraphComponent: PropTypes.element
};

export default TextBlock1;
