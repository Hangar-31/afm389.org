/* eslint-disable no-underscore-dangle */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { Link } from "gatsby";
import _configBase from "./_config";
import _configSite from "../../_config";

export default styled(Link)`
  ${_configBase}
  margin-bottom: 15px;

  color: ${_configSite.colorTertiary};
  font-family: ${_configSite.fontQuintery};
  font-size: 1.25rem;
  line-height: 1.5;
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    color: ${_configSite.colorSecondary};
  }

  @media (max-width: 991px) {
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 0.875rem;
  }
  @media (max-width: 575px) {
    font-size: 0.775rem;
  }
`;
