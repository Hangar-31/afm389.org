import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.a`
  ${baseConfig}
  padding: 15px 15px;

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

  -webkit-appearance: none;

  @media (max-width: 1369px) {
    font-size: 0.725rem;
  }
  @media(max-width: 1099px) {
    padding 8px;
    font-size: 0.625rem;
  }
  @media(max-width: 719px) {
    padding 8px;
    font-size: 0.875rem;
  }
`;
