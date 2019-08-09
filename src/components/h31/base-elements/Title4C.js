import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h4`
  ${baseConfig}
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.725rem;
  }
  @media (max-width: 576px) {
    font-size: 0.625rem;
  }

`;
