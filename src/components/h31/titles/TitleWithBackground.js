import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

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
  TitleComponent: <h1>Title 1</h1>,
  backgroundColor: "grey",
  textAlign: "center"
};

TitleWithBackground.propTypes = {
  TitleComponent: PropTypes.element,
  backgroundColor: PropTypes.string,
  textAlign: PropTypes.string
};

export default TitleWithBackground;
