import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h1`
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontSecondary};
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
  ${baseConfig}
`;
