/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h4`
  ${baseConfig}

  color: ${siteConfig.colorTertiary};
  font-family: ${siteConfig.fontPrimary};
  font-weight: 300;
  font-size: 0.875rem;
  @media (max-width: 1199px) {
    font-size: 0.775rem;
  }
  @media (max-width: 991px) {
    font-size: 0.725rem;
  }
`;
