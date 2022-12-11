/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled/macro";
import { H31Text2 } from "..";

const Wrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`;

function Paragraph1({ text, backgroundColor }) {
  return (
    <Wrapper
      css={css`
        background-color: ${backgroundColor};
      `}
    >
      <H31Text2>{text}</H31Text2>
    </Wrapper>
  );
}

Paragraph1.defaultProps = {
  backgroundColor: "rgba(0,0,0,0.8)",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium mi a quam molestie, vel ultricies libero faucibus. Duis dignissim ligula quis auctor lacinia. Donec porttitor blandit mauris, ac laoreet diam vehicula in. In tortor nunc, egestas eu consectetur sed, efficitur et massa. Pellentesque consectetur lorem vel neque tristique fringilla. Fusce condimentum convallis est sed tincidunt. Cras eget velit at justo ullamcorper gravida.",
};

Paragraph1.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
};

export default Paragraph1;
