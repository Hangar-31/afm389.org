import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 1em;
  font-weight: 500;
  transition: 0.2s;
  border-radius: 2px;
  background-color: transparent;
`;

const ButtonHollow = ({
  handleClick,
  buttonColor,
  hoverColor,
  TextComponent
}) => (
  <Button
    onClick={handleClick}
    css={css`
      border: 1px solid ${buttonColor};
      > * {
        transition: 0.2s;
      }
      &:hover {
        border: 1px solid ${hoverColor};
        > * {
          color: ${hoverColor};
        }
      }
    `}
  >
    {TextComponent}
  </Button>
);

ButtonHollow.defaultProps = {
  handleClick: () => console.log("ButtonHollow"),
  hoverColor: "#999999",
  buttonColor: "#000000",
  TextComponent: <span>Button</span>
};

ButtonHollow.propTypes = {
  handleClick: PropTypes.func,
  hoverColor: PropTypes.string,
  buttonColor: PropTypes.string,
  TextComponent: PropTypes.element
};

export default ButtonHollow;
