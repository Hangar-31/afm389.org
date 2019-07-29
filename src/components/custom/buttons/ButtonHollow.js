import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import _config from "../../_config";

const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  transition: 0.2s;
  border-radius: 2px;  
  background-color: transparent;
  
  color: ${_config.colorWhite};
  font-family: ${_config.fontPrimary};
  font-size: 0.8rem;
  font-weight: 300;
  text-transform: uppercase;
`;

export default ({text}) => (
  <Button
    css={css`
      border: 1px solid ${_config.colorWhite};
      transition: 0.2s;
      &:hover {
        border: 1px solid ${_config.colorTertiary};
        color: ${_config.colorTertiary};
        }
      }
    `}
  >
    {text}
  </Button>
);

