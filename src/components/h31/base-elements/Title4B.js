import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h4`
  color: ${siteConfig.colorTertiary};
  font-family: ${siteConfig.fontPrimary};
  font-weight: 300;
  font-size: 0.875rem;

  ${baseConfig}
`;
