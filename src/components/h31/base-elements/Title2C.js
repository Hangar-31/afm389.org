import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h2`
  color: ${siteConfig.colorWhite};
  font-size: 3.125rem;
  font-family: ${siteConfig.fontTertiary};
  font-weight: 300;
  text-transform: uppercase;

  ${baseConfig}
`;
