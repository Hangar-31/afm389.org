import React, { Component } from "react";
// import PropTypes from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.nav`
  z-index: 10;
  position: fixed;
  right: -300px;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: black;
  transition: 0.5s;
`;

export default class MobileNav1 extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };

    this.onClickShowMenu = this.onClickShowMenu.bind(this);
  }

  onClickShowMenu() {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  render() {
    const { visible } = this.state;

    return (
      <>
        <button type="button" onClick={this.onClickShowMenu}>
          <svg
            css={css`
              cursor: pointer;
            `}
            width="40"
            height="40"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="29"
              height="29"
              rx="1.5"
              fill="#6DA55F"
              fillOpacity="0.27"
              stroke="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 21H17V19H7V21ZM6.875 16H24.125V14H6.875V16ZM6.875 9V11H24.125V9H6.875Z"
              fill="white"
            />
          </svg>
        </button>
        <Container
          css={css`
            transform: translateX(${visible ? "-300px" : "0px"});
          `}
          onClick={visible}
        />
      </>
    );
  }
}
