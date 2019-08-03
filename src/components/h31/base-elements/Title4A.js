import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h4`
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-weight: 300;
  font-size: 1.125rem;
  text-decoration: underline;

  ${baseConfig}
`;
