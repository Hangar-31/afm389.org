import React, { Component } from "react";
// import PropTypes from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { H31LayoutContainer, H31LayoutCol, H31Link1, H31LayoutRow } from "..";
import _config from "../../_config";

const Overlay = styled.div`
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  transition: 0.4s;
`;

export default class MobileNav1 extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };

    this.onClickToggleMenu = this.onClickToggleMenu.bind(this);
  }

  onClickToggleMenu() {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  render() {
    const { visible } = this.state;

    return (
      <>
        <button
          css={css`
            padding: 0;
            margin: 0;
          `}
          type="button"
          onClick={this.onClickToggleMenu}
        >
          <svg
            css={css`
              padding: 0;
              margin: 0;
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

        <Overlay
          onClick={this.onClickToggleMenu}
          css={css`
            z-index: ${visible ? "9" : "-1"};
            background-color: ${visible
              ? "rgba(0, 0, 0, 0.4)"
              : "rgba(0, 0, 0, 0)"};
          `}
        />

        <H31LayoutContainer
          css={css`
            z-index: 10;
            position: fixed;
            right: -300px;
            top: 0;
            width: 300px !important;
            height: 100vh;
            background-color: ${_config.colorSecondary};
            transition: 0.5s;

            transform: translateX(${visible ? "-300px" : "0px"});
          `}
        >
          <H31LayoutRow>
            <H31LayoutCol
              css={css`
                margin-bottom: 30px;
              `}
              xs={12}
            >
              <button
                onClick={this.onClickToggleMenu}
                type="button"
                aria-label="Close Mobile Nav"
                css={css`
                  font-size: 2rem;
                  color: ${_config.colorWhite};
                `}
              >
                &times;
              </button>
            </H31LayoutCol>
            {_config.mainNav.map(link => (
              <H31LayoutCol
                css={css`
                  text-align: center;
                  margin-bottom: 30px;
                `}
                xs={12}
              >
                <H31Link1 to={link.to}>{link.name}</H31Link1>
              </H31LayoutCol>
            ))}
          </H31LayoutRow>
        </H31LayoutContainer>
      </>
    );
  }
}
