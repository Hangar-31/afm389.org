/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { Link as gLink } from "gatsby";
import { H31Button1 } from "..";
import _config from "../../_config";

const Container = styled.section`
  display: inline-flex;
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

const Link = styled(gLink)`
  ${H31Button1.__emotion_styles}

  cursor: pointer;
  padding: 8px 25px;
  color: ${_config.colorTertiary};
  font-weight: 500;
  transition: 0.2s;
  border-radius: 3px;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 767px) {
    padding: 15px 20px;
    font-size: 0.675rem;
  }
`;

const ButtonFillArrow = ({
  link,
  text,
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
    <Link
      to={link}
      css={css`
        padding: 20px 20px;
        background-color: ${primaryColor};
        border: 1px solid ${secondaryColor};
        font-weight: bold;
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
      {text}
    </Link>
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
  link: "/",
  text: "Test Button",
  secondaryColor: "#000000",
  primaryColor: "#FFFFFF",
  carrotColor: "#000000",
  arrowDirection: "right"
};

ButtonFillArrow.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  secondaryColor: PropTypes.string,
  primaryColor: PropTypes.string,
  carrotColor: PropTypes.string,
  arrowDirection: PropTypes.string
};

export default ButtonFillArrow;
