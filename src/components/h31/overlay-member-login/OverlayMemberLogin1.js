import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import {
  H31Link6,
  H31ContentBlock2,
  H31Text3,
  H31Link5,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Title2B,
  H31Link4
} from "../index";
import _config from "../../_config";

// Styled Components
const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  right: 0;
  padding: 15px;
  transition: 0.4s;
  background: rgba(0, 0, 0, 0.75);
`;

const ContainerContact = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width 100%;
  max-width: 500px;
  margin: 15px auto;
  padding: 15px 60px;
  background-color: #303D48;
  @media(max-width: 767px) {
    padding: 15px 15px;
    grid-template-columns: 1fr;
  }
`;

export default class Bio1 extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  render() {
    const { visible } = this.state;

    return (
      <>
        <H31Link6
          onClick={this.onClick}
          css={css`
            color: ${_config.colorWhite} !important;
            margin-left: 30px;
            cursor: pointer;
            &:hover {
              color: ${_config.colorTertiary} !important;
            }
            @media (max-width: 1370px) {
              margin-left: 15px;
            }
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
        >
          Member Log In
        </H31Link6>
        <Overlay
          onClick={this.onClick}
          css={css`
            display: ${visible ? "flex" : "none"};
          `}
        >
          <H31ContentBlock2 title="Notice: Member Log In">
            <H31LayoutContainer
              css={css`
                margin-top: -15px;
                padding: 15px;
                background-color: ${_config.colorWhite};

                @media (max-width: 575px) {
                  padding: 10px !important;
                }
              `}
              fluid
              as="section"
            >
              <H31LayoutRow>
                <H31LayoutCol xs={12}>
                  <H31Text3>
                    Sorry, but the member log in service is currently being
                    re-built to bring you (our members) a better experience!
                  </H31Text3>
                  <H31Text3>
                    If you need to access any information previously available
                    through your member login portal, please contact CFMA
                    directly with the information below. Or, fill out the form
                    located at the bottom of the website.
                  </H31Text3>
                  <ContainerContact>
                    <H31Title2B
                      css={css`
                        display: block;
                        text-align: center;
                        width: 100%;
                        color: #ffffff;
                        grid-column: span 2;
                        padding-bottom: 10px;
                        margin-bottom: 15px;
                        border-bottom: 2px solid #ffffff;
                        @media (max-width: 767px) {
                          grid-column: span 1;
                        }
                      `}
                    >
                      Contact Info
                    </H31Title2B>
                    <div
                      css={css`
                        width: 100%;
                        text-align: center;
                        margin-bottom: 15px;
                        border-right: 2px solid #ffffff;
                        @media (max-width: 767px) {
                          border-right: none;
                        }
                      `}
                    >
                      <H31Text3
                        css={css`
                          font-weight: bold;
                          color: ${_config.colorTertiary};
                        `}
                      >
                        Call
                      </H31Text3>
                      <H31Link4
                        css={css`
                          color: #ffffff;
                          display: block;
                        `}
                        href="tel::(407) 894-8666"
                      >
                        (407) 894-8666
                      </H31Link4>
                    </div>

                    <div
                      css={css`
                        text-align: center;
                      `}
                    >
                      <H31Text3
                        css={css`
                          font-weight: bold;
                          color: ${_config.colorTertiary};
                        `}
                      >
                        Email
                      </H31Text3>
                      <H31Link4
                        css={css`
                          color: #ffffff;
                          display: block;
                        `}
                        href="mailto::Local389@afm.org"
                      >
                        Local389@afm.org
                      </H31Link4>
                    </div>
                  </ContainerContact>
                </H31LayoutCol>

                <H31LayoutCol
                  css={css`
                    display: flex;
                    justify-content: center;
                  `}
                  xs={12}
                >
                  <H31Link5
                    css={css`
                      color: ${_config.colorWhite} !important;
                      cursor: pointer;
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
                    onClick={this.onClick}
                  >
                    Back To Website
                  </H31Link5>
                </H31LayoutCol>
              </H31LayoutRow>
            </H31LayoutContainer>
          </H31ContentBlock2>
        </Overlay>
      </>
    );
  }
}
