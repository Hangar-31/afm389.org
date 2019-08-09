import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.p`
  ${baseConfig}
  margin-bottom: 15px;

  color: ${siteConfig.colorLightGrey};
  font-family: ${siteConfig.fontQuintery};
  font-size: 1.25rem;
  line-height: 1.5;

  @media (max-width: 992px) {
    font-size: 0.875rem;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
  @media (max-width: 576px) {
    font-size: 0.625;
  }
`;
