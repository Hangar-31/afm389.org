import styled from "@emotion/styled";
import _configBase from "./_config";
import _configSite from "../../_config";

export default styled.a`
  ${_configBase}

  color: ${_configSite.colorGrey};
  font-family: ${_configSite.fontPrimary};
  font-size: 0.8rem;
  text-decoration: none;
  transition: 0.2s;
  
  &:hover {
    color: ${_configSite.colorTertiary};
    text-decoration: none;
  }

`;
