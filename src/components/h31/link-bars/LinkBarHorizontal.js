/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled/macro";

const List = styled.ul`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Item = styled.li`
  margin: 0 20px;
  height: 100%;
`;

function LinkBarHorizontal({ linkComponents }) {
  return (
    <List>
      {linkComponents.map((item) => (
        <Item key={item.props.LinkComponent.props.children}>{item}</Item>
      ))}
    </List>
  );
}

LinkBarHorizontal.defaultProps = {
  linkComponents: [
    <a href="/">Test</a>,
    <a href="/">Test</a>,
    <a href="/">Test</a>,
  ],
};

LinkBarHorizontal.propTypes = {
  linkComponents: PropTypes.arrayOf(PropTypes.element),
};

export default LinkBarHorizontal;
