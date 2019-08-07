import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.textarea`
  ${baseConfig}
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  padding: 5px 5px;

  color: ${siteConfig.colorDarkGrey};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.8rem;
  font-weight: 300;

  &::placeholder {
    color: ${siteConfig.colorLightGrey};
    font-family: ${siteConfig.fontPrimary};
    font-size: 0.8rem;
    font-weight: 300;
  }
`;
