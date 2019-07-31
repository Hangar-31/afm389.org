import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { H31Title1B } from "..";

const Wrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
`;

const TitleWithBackground = ({ title, backgroundColor, textAlign }) => (
  <Wrapper
    css={css`
      background-color: ${backgroundColor};
      text-align: ${textAlign};
    `}
  >
    <H31Title1B>{title}</H31Title1B>
  </Wrapper>
);

TitleWithBackground.defaultProps = {
  title: "Testing",
  backgroundColor: "grey",
  textAlign: "center"
};

TitleWithBackground.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  textAlign: PropTypes.string
};

export default TitleWithBackground;
