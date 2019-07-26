import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import moment from "moment";

const SimpleFlexContainer = styled.section`
  display: flex;
  align-items: center;
`;

const SimpleTime = ({ color, TextComponent }) => (
  <SimpleFlexContainer>
    <svg
      css={css`
        margin-right: 7px;
      `}
      width="25"
      height="25"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M16.4746 0.515625C7.65827 0.515625 0.515137 7.66992 0.515137 16.5C0.515137 25.3301 7.65827 32.4844 16.4746 32.4844C25.2909 32.4844 32.434 25.3301 32.434 16.5C32.434 7.66992 25.2909 0.515625 16.4746 0.515625ZM16.4746 29.3906C9.36362 29.3906 3.60406 23.6221 3.60406 16.5C3.60406 9.37793 9.36362 3.60938 16.4746 3.60938C23.5855 3.60938 29.3451 9.37793 29.3451 16.5C29.3451 23.6221 23.5855 29.3906 16.4746 29.3906ZM20.4516 22.6617L14.988 18.685C14.7885 18.5367 14.6727 18.3047 14.6727 18.0598V7.47656C14.6727 7.05117 15.0202 6.70312 15.4449 6.70312H17.5042C17.9289 6.70312 18.2764 7.05117 18.2764 7.47656V16.6096L22.5752 19.742C22.9227 19.9934 22.9935 20.4768 22.7425 20.8248L21.5327 22.4941C21.2817 22.8357 20.7991 22.9131 20.4516 22.6617Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="32.9485"
            height="33"
            fill="white"
            transform="matrix(-1 0 0 1 32.9487 0)"
          />
        </clipPath>
      </defs>
    </svg>
    {TextComponent}
  </SimpleFlexContainer>
);

SimpleTime.defaultProps = {
  color: "grey",
  TextComponent: (
    <span>
      {moment("2019-07-15T18:59:50.858Z")
        .startOf("day")
        .calendar()}
    </span>
  )
};

SimpleTime.propTypes = {
  color: PropTypes.string,
  TextComponent: PropTypes.element
};

export default SimpleTime;
