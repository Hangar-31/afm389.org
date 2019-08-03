import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.span`
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;

  ${baseConfig}
`;
