import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.button`
  ${baseConfig}

  display: inline-block;
  cursor: pointer;
  width: 100%;
  padding: 7px 3px;
  border-radius: 3px;
  background-color: ${siteConfig.colorTertiary};
  border-color: transparent;
  transition: 0.2s;
  outline: none !important;

  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.8rem;
  font-weight: 300;
  text-transform: uppercase;
  &:hover {
    background-color: ${siteConfig.colorWhite};
    border-color: ${siteConfig.colorTertiary};
    color: ${siteConfig.colorTertiary};
  }
`;
