import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359.99deg);
  }
`;

const SpinningCircle = ({ color }) => (
  <div
    css={css`
      height: 30px;
      width: 30px;
      border: 4px solid #eeeeee;
      border-top: 4px solid ${color};
      border-radius: 50%;
      animation: ${spinning} 1s ease infinite;
    `}
  />
);

SpinningCircle.defaultProps = {
  color: "#000000"
};

SpinningCircle.propTypes = {
  color: PropTypes.string
};

export default SpinningCircle;
