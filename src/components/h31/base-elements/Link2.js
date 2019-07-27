import styled from "@emotion/styled";
import { Link } from "gatsby";
import _config from "./_config";

export default styled(Link)`
  ${_config}
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;
