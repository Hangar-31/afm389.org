import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.a`
  color: ${siteConfig.colorTertiary};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.8rem;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }

  ${baseConfig}
`;
