import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  ${baseConfig}
  padding: 5px 5px;

  color: ${siteConfig.colorLightGrey};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.875rem;
  font-weight: 300;

  option {
    color: ${siteConfig.colorDarkGrey};
    font-family: ${siteConfig.fontPrimary};
    font-size: 0.875rem;
    font-weight: 300;
  }
`;
