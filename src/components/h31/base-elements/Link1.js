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

  @media(max-width: 1369px) {
    font-size: 0.725rem;
  }
  @media (max-width: 1099px) {
    font-size: 0.625rem;
  }
  @media (max-width: 991px) {
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 0.875rem;
  }
  @media (max-width: 575px) {
    font-size: 0.725rem;
  }
`;
