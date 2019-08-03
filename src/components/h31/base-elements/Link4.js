import styled from "@emotion/styled";
import _config from "./_config";

export default styled.a`
  color: ${_config.colorGrey};
  font-family: ${_config.fontPrimary};
  font-size: 0.8rem;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }

  ${_config}
`;
