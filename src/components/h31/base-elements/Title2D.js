import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.h2`
  ${baseConfig}
  
  color: ${siteConfig.colorWhite};
  font-size: 3.875rem;
  font-family: ${siteConfig.fontTertiary};
  font-weight: 300;
  text-transform: uppercase;

  @media (max-width: 991px) {
    font-size: 3.25rem;
  }
  @media (max-width: 767px) {
    font-size: 2.5rem;
  }
  @media (max-width: 575px) {
    font-size: 1.5rem;
  }
`;
