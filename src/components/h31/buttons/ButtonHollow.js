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
  ButtonComponent,
  onClick,
  buttonColor,
  hoverColor
}) => (
  <Button
    onClick={onClick}
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
    {ButtonComponent}
  </Button>
);

ButtonHollow.defaultProps = {
  ButtonComponent: <span>Button</span>,
  onClick: () => console.log("ButtonHollow"),
  hoverColor: "#999999",
  buttonColor: "#000000"
};

ButtonHollow.propTypes = {
  ButtonComponent: PropTypes.element,
  onClick: PropTypes.func,
  hoverColor: PropTypes.string,
  buttonColor: PropTypes.string
};

export default ButtonHollow;
