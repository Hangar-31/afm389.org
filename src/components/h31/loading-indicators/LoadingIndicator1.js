/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import PropTypes from "prop-types";

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359.99deg);
  }
`;

function SpinningCircle({ color }) {
  return (
    <div
      css={css`
        height: 17px;
        width: 17px;
        border: 3px solid #eeeeee;
        border-top: 3px solid ${color};
        border-radius: 50%;
        animation: ${spinning} 1s ease infinite;
      `}
    />
  );
}

SpinningCircle.defaultProps = {
  color: "#000000",
};

SpinningCircle.propTypes = {
  color: PropTypes.string,
};

export default SpinningCircle;
