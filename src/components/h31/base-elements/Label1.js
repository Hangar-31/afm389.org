/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import _configBase from "./_config";
import _configStyle from "../../_config";

export default styled.label`
  position: relative;
  width: 100%;
  ${_configBase}

  color: ${_configStyle.colorLightGrey};
  font-family: ${_configStyle.fontPrimary};
  font-weight: 300;
`;
