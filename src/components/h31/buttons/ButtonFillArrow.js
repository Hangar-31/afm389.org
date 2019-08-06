/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { H31Button1 } from "..";
import _config from "../../_config";

const Container = styled.section`
  display: flex;
  align-items: center;
`;

const CarrotRight = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin-left: 10px;
`;

const CarrotLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin-right: 10px;
`;

const Button = styled.button`
  ${H31Button1.__emotion_styles}

  cursor: pointer;
  padding: 8px 25px;
  color: ${_config.colorTertiary};
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
  arrowDirection
}) => (
  <Container>
    {arrowDirection === "left" && (
      <CarrotLeft
        css={css`
          border-right: 8px solid ${carrotColor};
        `}
      />
    )}
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
      See All News
    </Button>
    {arrowDirection === "right" && (
      <CarrotRight
        css={css`
          border-left: 8px solid ${carrotColor};
        `}
      />
    )}
  </Container>
);

ButtonFillArrow.defaultProps = {
  handleClick: () => console.log("ButtonFillArrow"),
  secondaryColor: "#000000",
  primaryColor: "#FFFFFF",
  carrotColor: "#000000",
  arrowDirection: "right"
};

ButtonFillArrow.propTypes = {
  handleClick: PropTypes.func,
  secondaryColor: PropTypes.string,
  primaryColor: PropTypes.string,
  carrotColor: PropTypes.string,
  arrowDirection: PropTypes.string
};

export default ButtonFillArrow;
