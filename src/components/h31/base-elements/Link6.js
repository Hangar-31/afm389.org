import styled from "@emotion/styled";
import _configBase from "./_config";
import _configStyles from "../../_config";

export default styled.a`
  ${_configBase}

  color: ${_configStyles.colorWhite};
  border: 1px solid ${_configStyles.colorWhite};
  border-radius: 3px;
  padding: 10px 8px;
  transition: 0.2s;

  font-family: ${_configStyles.fontPrimary};
  font-size: 0.875rem;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    border-color: ${_configStyles.colorTertiary};
    color: ${_configStyles.colorTertiary};
    text-decoration: none;
  }

  -webkit-appearance: none;

  @media (max-width: 1369px) {
    font-size: 0.725rem;
  }
  @media(max-width: 1099px) {
    font-size: 0.625rem;
    padding: 8px 6px;
  }
`;
