/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.p`
  ${baseConfig}

  color: ${siteConfig.colorTertiary};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.8rem;
`;
