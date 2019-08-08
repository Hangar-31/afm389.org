import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.p`
  ${baseConfig}
  
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-size: 1.25rem;
  line-height: 1.5;

  @media(max-width: 1100px) {
    font-size: 1rem;
  }

`;
