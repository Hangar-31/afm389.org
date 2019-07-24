import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import Heading1 from "../base-elements/Title1";

const Wrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
`;

const TitleWithBackground = ({
  TitleComponent,
  backgroundColor,
  textAlign
}) => (
  <Wrapper
    css={css`
      background-color: ${backgroundColor};
      text-align: ${textAlign};
    `}
  >
    {TitleComponent}
  </Wrapper>
);

TitleWithBackground.defaultProps = {
  backgroundColor: "grey",
  textAlign: "center",
  TitleComponent: <Heading1>Testing</Heading1>
};

TitleWithBackground.propTypes = {
  backgroundColor: PropTypes.string,
  textAlign: PropTypes.string,
  TitleComponent: PropTypes.element
};

export default TitleWithBackground;
