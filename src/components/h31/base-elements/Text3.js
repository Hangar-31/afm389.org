import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.p`
  color: ${siteConfig.colorLightGrey};
  font-family: ${siteConfig.fontQuintery};
  font-size: 1.125rem;
  line-height: 1.5;

  ${baseConfig}
  margin-bottom: 15px;
`;
