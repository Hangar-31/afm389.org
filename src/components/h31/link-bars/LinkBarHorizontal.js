/* eslint-disable react/no-array-index-key */
import { PropTypes } from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

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

const LinkBarHorizontal = ({ linkComponents }) => (
  <List>
    {linkComponents.map((item, i) => (
      <Item key={`link-bar-horizontal-links-${i}`}>{item}</Item>
    ))}
  </List>
);

LinkBarHorizontal.defaultProps = {
  linkComponents: [
    <a href="/">Test</a>,
    <a href="/">Test</a>,
    <a href="/">Test</a>
  ]
};

LinkBarHorizontal.propTypes = {
  linkComponents: PropTypes.arrayOf(PropTypes.elem)
};

export default LinkBarHorizontal;
