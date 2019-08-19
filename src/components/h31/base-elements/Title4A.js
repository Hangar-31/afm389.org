import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h4`
  ${baseConfig}
  
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-weight: 300;
  font-size: 1.25rem;
  text-decoration: underline;
`;
