// import { PropTypes } from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const TextBlock3 = () => (
  <Container>
    <ContentContainer />
  </Container>
);

TextBlock3.defaultProps = {};

TextBlock3.propTypes = {};

export default TextBlock3;
