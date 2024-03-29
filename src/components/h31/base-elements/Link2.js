/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { Link } from "gatsby";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled(Link)`
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.8rem;
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    text-decoration: none;
    opacity: 0.7;
    color: ${siteConfig.colorTertiary};
  }
  @media (max-width: 1199px) {
    font-size: 0.725rem;
  }
  @media (max-width: 991px) {
    font-size: 0.675rem;
  }

  ${baseConfig}
`;
