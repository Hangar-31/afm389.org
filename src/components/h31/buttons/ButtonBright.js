import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

const WhiteBox = styled.div`
  display: inline-block;
  background-color: #ffffff;
  border-radius: 2px;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 15px 20px;
  font-size: 1em;
  font-weight: 500;
  transition: 0.2s;
  border-radius: 2px;
  &:hover {
    opacity: 0.75;
  }
`;

const ButtonBright = ({
  handleClick,
  backgroundColor,
  borderColor,
  ButtonComponent
}) => (
  <WhiteBox>
    <Button
      onClick={handleClick}
      css={css`
        background-color: ${backgroundColor};
        border: 1px solid ${borderColor};
      `}
    >
      {ButtonComponent}
    </Button>
  </WhiteBox>
);

ButtonBright.defaultProps = {
  handleClick: () => console.log("ButtonBright"),
  backgroundColor: "transparent",
  borderColor: "#000000",
  ButtonComponent: <span>Button</span>
};

ButtonBright.propTypes = {
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  ButtonComponent: PropTypes.element
};

export default ButtonBright;
