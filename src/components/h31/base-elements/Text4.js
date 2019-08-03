import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled.p`
  color: ${siteConfig.colorDarkGrey};
  font-family: ${siteConfig.fontQuintery};
  font-size: 1.125rem;
  line-height: 1.5;

  ${baseConfig}
`;
