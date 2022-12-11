/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h2`
  ${baseConfig}

  color: ${siteConfig.colorSecondary};
  font-size: 1.5rem;
  font-family: ${siteConfig.fontTertiary};
  font-weight: 300;
  text-transform: uppercase;

  @media (max-width: 991px) {
    font-size: 1.25rem;
  }
  @media (max-width: 767px) {
    font-size: 1.125rem;
  }
  @media (max-width: 575px) {
    font-size: 0.875rem;
  }
`;
