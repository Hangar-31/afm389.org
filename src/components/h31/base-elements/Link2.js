import styled from "@emotion/styled";
import { Link } from "gatsby";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled(Link)`
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.8rem;
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    text-decoration: none;
    opacity: 0.7;
  }

  ${baseConfig}
`;
