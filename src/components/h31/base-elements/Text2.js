/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.p`
  ${baseConfig}

  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-size: 1.25rem;
  line-height: 1.5;

  @media (max-width: 991px) {
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 0.75rem;
  }
`;
