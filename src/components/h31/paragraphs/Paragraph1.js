import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`;

const Paragraph1 = ({ TextComponent, backgroundColor }) => (
  <Wrapper
    css={css`
      background-color: ${backgroundColor};
    `}
  >
    {TextComponent}
  </Wrapper>
);

Paragraph1.defaultProps = {
  backgroundColor: "rgba(0,0,0,0.6)",
  TextComponent: (
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

Paragraph1.propTypes = {
  backgroundColor: PropTypes.string,
  TextComponent: PropTypes.element
};

export default Paragraph1;
