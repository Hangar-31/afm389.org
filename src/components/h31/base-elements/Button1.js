import styled from "@emotion/styled";
import _config from "../../_config";

export default styled.button`
  cursor: pointer;
  width: 100%;
  padding: 3px;
  border-radius: 2px;
  background-color: ${_config.colorTertiary};
  border-color: transparent;
  transition: 0.2s;
  outline: none !important;
  &:hover {
    background-color: ${_config.colorWhite};
    border-color: ${_config.colorTertiary};
    color: ${_config.colorTertiary};
  }
`;
