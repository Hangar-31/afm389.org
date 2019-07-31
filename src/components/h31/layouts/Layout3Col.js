import { PropTypes } from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: 1440px;
  margin: 0 auto;
`;

const Layout3Col = ({ children }) => <Container>{children}</Container>;

Layout3Col.defaultProps = {
  children: <span />
};

Layout3Col.propTypes = {
  children: PropTypes.element
};

export default Layout3Col;
