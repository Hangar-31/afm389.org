/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h1`
  display: block;
  width: 100%;

  color: ${siteConfig.colorWhite};
  font-size: 3.75rem;
  font-family: ${siteConfig.fontTertiary};
  font-weight: 300;
  text-transform: uppercase;
  ${baseConfig}
`;
