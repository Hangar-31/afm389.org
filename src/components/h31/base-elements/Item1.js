import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.li`
  ${baseConfig}
  margin-bottom: 15px;

  color: ${siteConfig.colorLightGrey};
  font-family: ${siteConfig.fontQuintery};
  font-size: 1.25rem;
  line-height: 1.5;

  @media (max-width: 991px) {
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 0.875rem;
  }
  @media (max-width: 575px) {
    font-size: 0.775rem;
  }
`;
