/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.p`
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontTertiary};
  font-size: 1.5rem;
  font-weight: regular;
  line-height: 1.5;
  text-transform: uppercase;

  ${baseConfig}
`;
