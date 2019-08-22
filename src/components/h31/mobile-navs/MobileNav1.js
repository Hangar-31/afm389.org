/* eslint-disable no-undef */
import React, { Component } from "react";
// import PropTypes from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

// Components
import {
  H31LayoutContainer,
  H31LayoutCol,
  H31Link1,
  H31LayoutRow,
  H31Link6,
  H31SocialIcons
} from "..";
import _config from "../../_config";

// Styled Components
const Overlay = styled.div`
  z-index: -1;
  position: fixed;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
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
    if (typeof window !== "undefined") {
      if (visible) {
        disableBodyScroll(document.querySelector("body"));
      } else {
        enableBodyScroll(document.querySelector("body"));
      }
    }

    return (
      <>
        <button
          css={css`
            padding: 0;
            margin: 0;
            border: none;
            background: none;
            border-radius: 5px;
            -webkit-appearance: none;
            &:hover {
              background: ${_config.colorTertiary};
            }
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
            @media (max-width: 575px) {
              width: 250px !important;
            }
          `}
        >
          <H31LayoutRow
            css={css`
              overflow-y: scroll;
              padding-bottom: 100px !important;
            `}
          >
            <H31LayoutCol
              css={css`
                margin-bottom: 15px;
                @media (max-width: 575px) {
                  margin-bottom: -20px;
                  padding-left: 0px !important;
                }
              `}
              xs={12}
            >
              <button
                onClick={this.onClickToggleMenu}
                type="button"
                aria-label="Close Mobile Nav"
                css={css`
                  z-index: 1;
                  position: relative;
                  width: 45px;
                  height: 45px;
                  background: none;
                  border: none;
                  line-height: 0;
                  font-size: 2rem;
                  color: ${_config.colorWhite};
                  -webkit-appearance: none;

                  &:hover {
                    color: ${_config.colorTertiary};
                  }
                `}
              >
                &times;
              </button>
            </H31LayoutCol>

            {_config.mainNav.map(link => (
              <H31LayoutCol
                css={css`
                  text-align: center;
                  margin-bottom: 20px;
                `}
                xs={12}
              >
                <H31Link1
                  css={css`
                    &:hover {
                      color: ${_config.colorTertiary};
                    }
                  `}
                  activeClassName="main-mobile-link-active"
                  to={link.to}
                >
                  {link.name}
                </H31Link1>
              </H31LayoutCol>
            ))}

            <H31LayoutCol
              css={css`
                text-align: center;
                margin-top: 45px;
                margin-bottom: 45px;
                @media (max-width: 575px) {
                  margin-top: 30px;
                  margin-bottom: 30px;
                }
              `}
              xs={12}
            >
              <H31Link6
                css={css`
                  @media (max-width: 991px) {
                    font-size: 0.875rem;
                    padding: 10px 20px;
                  }
                  @media (max-width: 767px) {
                    font-size: 0.75rem;
                    padding: 10px 20px;
                  }
                  @media (max-width: 575px) {
                    font-size: 0.675rem;
                    padding: 10px 20px;
                  }
                `}
                href="https://afmquartet.org/wp-content/plugins/afmorg/loginform.php?client_token=898909860"
              >
                Member Log In
              </H31Link6>
            </H31LayoutCol>

            {_config.socials.map(social => (
              <H31LayoutCol
                css={css`
                  text-align: center;
                  margin-bottom: 45px;
                `}
                xs={12}
              >
                <H31SocialIcons
                  color={_config.colorWhite}
                  social={social.social}
                  link={social.link}
                  colorHover={_config.colorTertiary}
                />
              </H31LayoutCol>
            ))}

            {_config.footerNav.map(link => (
              <H31LayoutCol
                css={css`
                  text-align: center;
                  margin-bottom: 30px;
                `}
                xs={12}
              >
                <H31Link1
                  css={css`
                    &:hover {
                      color: ${_config.colorTertiary};
                    }
                  `}
                  activeClassName="main-mobile-link-active"
                  to={link.to}
                >
                  {link.name}
                </H31Link1>
              </H31LayoutCol>
            ))}
          </H31LayoutRow>
        </H31LayoutContainer>
      </>
    );
  }
}
