import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";

const List = styled.ul`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 0;
  margin: 0;
  list-style: none;
`;

const Item = styled.li`
  margin: 0 10px;
`;

const SocialBarHorizontal = ({ socialComponents }) => (
  <List>
    {socialComponents.map(item => (
      <Item key="social-bar-horizontal-item">{item}</Item>
    ))}
  </List>
);

SocialBarHorizontal.defaultProps = {
  socialComponents: [<span>H</span>, <span>H</span>, <span>H</span>]
};

SocialBarHorizontal.propTypes = {
  socialComponents: PropTypes.arrayOf(PropTypes.element)
};

export default SocialBarHorizontal;
