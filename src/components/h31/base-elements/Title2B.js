import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h2`
  ${baseConfig}
  
  color: ${siteConfig.colorSecondary};
  font-size: 1.5rem;
  font-family: ${siteConfig.fontTertiary};
  font-weight: 300;
  text-transform: uppercase;
`;
