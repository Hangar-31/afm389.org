/** @jsx jsx*/
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import _config from '../../_config';

export default styled.h1`
  color: ${_config.colorWhite};
  font-family: ${_config.fontSecondary};
  font-weight: 300;
  text-transform: uppercase;
  margin: 0;
`