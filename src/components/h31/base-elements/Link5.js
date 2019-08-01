import styled from "@emotion/styled";
import { Link } from "gatsby";
import _configBase from "./_config";
import _configStyles from "../../_config";

export default styled(Link)`
  color: ${_configStyles.colorWhite};
  background-color: ${_configStyles.colorTertiary};
  border: 1px solid ${_configStyles.colorWhite};
  border-radius: 3px;
  ${_configBase}
  padding: 15px 15px;
  transition: 0.2s;

  font-family: ${_configStyles.fontPrimary};
  font-size: 0.875rem;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    border-color: ${_configStyles.colorWhite};
    color: ${_configStyles.colorWhite};
    text-decoration: none;
  }
`;
