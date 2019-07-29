import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";
import _config from "../_config";
import SocialIcons from "./socials/SocialIcons";

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

export default () => (
  <List>
    {_config.socials.map((social, i) => (
      <Item key={i}>
        <SocialIcons social={social.social} link={social.link} color={_config.colorWhite} colorHover={_config.colorTertiary}/>
      </Item>
    ))}
  </List>
);
