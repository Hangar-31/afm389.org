/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  border-radius: 5px;
  border: none;
  ${baseConfig}
  padding: 5px 5px;

  color: ${siteConfig.colorDarkGrey};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.75rem;
  font-weight: 300;

  &::placeholder {
    color: ${siteConfig.colorLightGrey};
    font-family: ${siteConfig.fontPrimary};
    font-size: 0.75rem;
    font-weight: 300;
  }
`;
