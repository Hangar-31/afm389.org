import styled from "@emotion/styled";
import { Link } from "gatsby";
import baseConfig from "./_config";
import siteConfig from "../../_config";

export default styled(Link)`
  color: ${siteConfig.colorWhite};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }

  ${baseConfig}

  @media(max-width: 1370px) {
    font-size: 0.725rem;
  }
  @media (max-width: 1100px) {
    font-size: 0.625rem;
  }
  @media (max-width: 720px) {
    font-size: 1.25rem;
  }
`;
