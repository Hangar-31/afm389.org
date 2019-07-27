import styled from "@emotion/styled";
import _config from "../../_config";

export default styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 1em;
  font-weight: 500;
  transition: 0.2s;
  border-radius: 2px;
  background: ${_config.colorTertiary};
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.4);
  }
`;
