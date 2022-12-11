/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h3`
  color: ${siteConfig.colorDarkGrey};
  font-family: ${siteConfig.fontPrimary};
  font-weight: bold;
  font-size: 0.925rem;
  text-decoration: underline;

  ${baseConfig}
`;
