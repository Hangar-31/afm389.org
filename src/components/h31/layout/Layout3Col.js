import { PropTypes } from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  > * {
    width: 33.33%;
  }
`;

const Layout3Col = ({ children }) => <Container>{children}</Container>;

Layout3Col.defaultProps = {
  children: <span />
};

Layout3Col.propTypes = {
  children: PropTypes.element
};

export default Layout3Col;
