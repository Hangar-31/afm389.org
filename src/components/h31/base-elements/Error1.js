import styled from "@emotion/styled";
import _configBase from "./_config";
import _configStyles from "../../_config";

export default styled.span`
  ${_configBase}
  
  font-family: ${_configStyles.fontPrimary};
  font-size: 0.875rem;
  color: red;
  @media(max-width: 575px) {
    font-size: 0.725rem;
  }
`;
