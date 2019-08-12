import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.button`
  ${baseConfig}

  display: inline-block;
  cursor: pointer;
  padding: 7px;
  border-radius: 3px;
  background-color: ${siteConfig.colorTertiary};
  border-color: none;
  border-style: none;
  transition: 0.2s;

  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 0;
  text-transform: uppercase;
  outline: none !important;

  &:hover {
    background-color: ${siteConfig.colorWhite};
    border-color: ${siteConfig.colorTertiary};
    color: ${siteConfig.colorTertiary};
  }
`;
