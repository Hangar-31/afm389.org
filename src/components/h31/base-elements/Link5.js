import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.a`
  color: ${siteConfig.colorWhite};
  background-color: ${siteConfig.colorTertiary};
  border: 1px solid ${siteConfig.colorWhite};
  border-radius: 3px;
  transition: 0.2s;

  font-family: ${siteConfig.fontPrimary};
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    border-color: ${siteConfig.colorWhite};
    color: ${siteConfig.colorWhite};
    text-decoration: none;
  }

  ${baseConfig}
  padding: 15px 15px;
`;
