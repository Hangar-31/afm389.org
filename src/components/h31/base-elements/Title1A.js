import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h1`
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontSecondary};
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
  ${baseConfig}

  @media(max-width: 1369px) {
    font-size: 1rem;
  }
  @media (max-width: 1099px) {
    font-size: 0.875rem;
  }
`;
