import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

const Container = styled.section`
  display: flex;
  align-items: center;
`;

const Carrot = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin-left: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 8px 25px;
  font-size: 1em;
  font-weight: 500;
  transition: 0.2s;
  border-radius: 2px;
  border-radius: 3px;
`;

const ButtonFillArrow = ({
  handleClick,
  primaryColor,
  secondaryColor,
  carrotColor,
  ButtonComponent
}) => (
  <Container>
    <Button
      onClick={handleClick}
      css={css`
        background-color: ${primaryColor};
        border: 1px solid ${secondaryColor};
        transition: 0.2s;
        span {
          color: ${carrotColor};
        }
        &:hover {
          color: ${primaryColor};
          background-color: ${secondaryColor};
          span {
            color: ${primaryColor};
          }
        }
      `}
    >
      {ButtonComponent}
    </Button>
    <Carrot
      css={css`
        border-left: 8px solid ${carrotColor};
      `}
    />
  </Container>
);

ButtonFillArrow.defaultProps = {
  handleClick: () => console.log("ButtonFillArrow"),
  secondaryColor: "#000000",
  primaryColor: "#FFFFFF",
  carrotColor: "8px solid #000000",
  ButtonComponent: <span>Button</span>
};

ButtonFillArrow.propTypes = {
  handleClick: PropTypes.func,
  secondaryColor: PropTypes.string,
  primaryColor: PropTypes.string,
  carrotColor: PropTypes.string,
  ButtonComponent: PropTypes.element
};

export default ButtonFillArrow;
